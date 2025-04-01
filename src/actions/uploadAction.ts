"use server";
import cloudinary from "@/lib/cloudinary";

export async function uploadProjectAction(formData: FormData) {
  try {
    const textFields = {
      title: formData.get("title"),
      servisekind: formData.get("servisekind"),
      projectKind: formData.get("projectKind"),
      Year: formData.get("Year"),
      ClientName: formData.get("ClientName"),
      ProjectDescription: formData.get("ProjectDescription"),
      aboutClient: formData.get("aboutClient"),
      AboutProject: formData.get("AboutProject"),
    };

    const imageFiles = [
      formData.get("ProjectCover"),
      formData.get("ProjectPageCover"),
      formData.get("image1"),
      formData.get("image2"),
      formData.get("image3"),
    ] as File[];

    const imageUrls = await Promise.all(
      imageFiles.map(async (file) => {
        if (!file) return null;

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        return new Promise<string>((resolve, reject) => {
          cloudinary.uploader.upload_stream({ folder: "uploads" }, (error, result) => {
            if (error) reject(error);
            else resolve(result?.secure_url || "");
          }).end(buffer);
        });
      })
    );

    return { ...textFields, imageUrls };
  } catch (error) {
    return { error: "خطا در آپلود!" };
  }
}
