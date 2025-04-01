import ConnectToDb from "@/utils/ConnectToDb";
import ProjectModel from "@/models/Projects";
import cloudinary from "@/lib/cloudinary"; // اضافه کردن اتصال به Cloudinary

export async function GET() {
  try {
    ConnectToDb();
    const AllData = await ProjectModel.find({}).lean();
    return new Response(JSON.stringify(AllData), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "خطا در دریافت پروژه‌ها", error: error.message }),
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    ConnectToDb();

    const formData = await req.formData();
    const textFields = {
      title: formData.get("title") as string,
      servisekind: formData.get("servisekind") as string,
      projectKind: formData.get("projectKind") as string,
      Year: formData.get("Year") as string,
      ClientName: formData.get("ClientName") as string,
      ProjectDescription: formData.get("ProjectDescription") as string,
      aboutClient: formData.get("aboutClient") as string,
      AboutProject: formData.get("AboutProject") as string,
    };

    // آپلود تصاویر به Cloudinary
    const imageUploadPromises = [
      "ProjectCover", "ProjectPageCover", "image1", "image2", "image3"
    ].map(async (field) => {
      const file = formData.get(field) as File;
      if (file) {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        return new Promise<string>((resolve, reject) => {
          cloudinary.uploader.upload_stream({ folder: "projects" }, (error, result) => {
            if (error) reject(error);
            else resolve(result?.secure_url || "");
          }).end(buffer);
        });
      }
      return null;
    });

    const imageUrls = await Promise.all(imageUploadPromises);

    // ذخیره اطلاعات پروژه در دیتابیس
    const newProject = await ProjectModel.create({
      ...textFields,
      ProjectCover: imageUrls.filter(Boolean)[0], // فقط URL‌های معتبر را ذخیره می‌کنیم
      ProjectPageCover: imageUrls.filter(Boolean)[1], // فقط URL‌های معتبر را ذخیره می‌کنیم
      image1: imageUrls.filter(Boolean)[2], // فقط URL‌های معتبر را ذخیره می‌کنیم
      image2: imageUrls.filter(Boolean)[3], // فقط URL‌های معتبر را ذخیره می‌کنیم
      image3: imageUrls.filter(Boolean)[4], // فقط URL‌های معتبر را ذخیره می‌کنیم
    });

    return new Response(
      JSON.stringify({ message: "پروژه با موفقیت ایجاد شد", data: newProject }),
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "خطا در ایجاد پروژه", error: error.message }),
      { status: 500 }
    );
  }
}
