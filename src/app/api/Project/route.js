import ConnectToDb from "@/utils/ConnectToDb";
import ProjectModel from "@/models/Projects";
import { S3 } from 'aws-sdk';



export async function GET() {
  try {
      ConnectToDb()
      const AllData = await ProjectModel.find({}).lean()
      console.log(AllData)
      return Response.json(AllData, {status: 200})

  } catch (error) {
      return new Response(JSON.stringify({
          message: "خطا در دریافت پیام ها",
          error: error.message
      }), {
          status: 500
      })
  }
}




export async function POST(req) {
  try {
    ConnectToDb();

    const data = await req.formData();
    const title = data.get("title");
    const servisekind = data.get("servisekind");
    const projectKind = data.get("projectKind");
    const Year = data.get("Year");
    const ProjectCover = data.get("ProjectCover");
    const ProjectPageCover = data.get("ProjectPageCover");
    const image = data.get("image");
    const image2 = data.get("image2");
    const image3 = data.get("image3");
    const ClientName = data.get("ClientName");
    const ProjectDescription = data.get("ProjectDescription");
    const aboutClient = data.get("aboutClient");
    const AboutProject = data.get("AboutProject");

    const uploadToS3 = async (file) => {

      const s3= new S3({
        accessKeyId:process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey:process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
        endpoint:process.env.NEXT_PUBLIC_AWS_S3_BUCKET_URL,
      })

      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = Date.now() + file.name;
      const params = {
        Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
        Key: fileName,
        Body: buffer,
        ContentType: file.type,
      };
    const response = await s3.upload(params).promise();
  
    const signedUrl = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.storage.c2.liara.space/${fileName}`;
    return signedUrl;
    };
    
    const ProjectCoverPath = await uploadToS3(ProjectCover);
    const ProjectPageCoverPath = await uploadToS3(ProjectPageCover);
    const image1Path = await uploadToS3(image);
    const image2Path = await uploadToS3(image2);
    const image3Path = await uploadToS3(image3);


    const Project = await ProjectModel.create({
      title,
      ClientName,
      AboutProject,
      aboutClient,
      servisekind,
      projectKind,
      ProjectDescription,
      Year,
      ProjectCover: ProjectCoverPath,
      ProjectPageCover: ProjectPageCoverPath,
      image1: image1Path,
      image2: image2Path,
      image3: image3Path,
    });


    const update = await ProjectModel.updateOne(
      { _id: Project._id },
      { $set: { _id: Project._id } }
    );
    


    
    return Response.json(
      { message: "project created successfully", data: Project },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "something went wrong", error },
      { status: 500 }
    );
  }
}
