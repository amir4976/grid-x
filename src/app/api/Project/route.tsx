import ConnectToDb from "@/utils/ConnectToDb";
import ProjectModel from "@/models/Projects";





export async function GET() {
  try {
    ConnectToDb();
    const AllData = await ProjectModel.find({}).lean();
    console.log(AllData);
    return new Response(JSON.stringify(AllData), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "خطا در دریافت پروژه‌ها",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}


export async function POST(req: Request) {
  try {
    // اتصال به دیتابیس
    ConnectToDb();

    // دریافت داده‌های فرم
    const formData = await req.formData();
 
    // فایل‌ها را از فرم بگیرید
    const filesToUpload = [
      formData.get("ProjectCover"),
      formData.get("ProjectPageCover"),
      formData.get("image1"),
      formData.get("image2"),
      formData.get("image3"),
    ]; // حذف مقادیر null و تبدیل به آرایه از File
    
    console.log("Files to upload:", filesToUpload);


    // اطلاعات متنی دیگر
    const title = formData.get("title");
    const servisekind = formData.get("servisekind");
    const projectKind = formData.get("projectKind");
    const Year = formData.get("Year");
    const ClientName = formData.get("ClientName");
    const ProjectDescription = formData.get("ProjectDescription");
    const aboutClient = formData.get("aboutClient");
    const AboutProject = formData.get("AboutProject");

    // ذخیره اطلاعات پروژه در دیتابیس (اینجا فقط مسیرهای آپلود شده رو ذخیره می‌کنیم)
    // const Project = await ProjectModel.create({
    //   title,
    //   servisekind,
    //   projectKind,
    //   Year,
    //   ClientName,
    //   ProjectDescription,
    //   aboutClient,
    //   AboutProject,
    //   images: uploadedFiles.map(file => file.url), // ذخیره URL فایل‌های آپلود شده
    // });

    return new Response(
      JSON.stringify({ message: "Project created successfully", data: 'Project' }),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Something went wrong", error: error.message }),
      { status: 500 }
    );
  }
}