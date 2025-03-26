"use client";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
function Page() {
  const [title, setTitle] = useState("");
  const [servisekind, setServisekind] = useState("");
  const [projectKind, setProjectkind] = useState("");
  const [Year, setYear] = useState("");
  const [ProjectCover, setProjectCover] = useState("");
  const [ProjectPageCover, setProjectPageCover] = useState("");
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [ClientName, setClientName] = useState("");
  const [ProjectDescription, setProjectDescription] = useState("");
  const [aboutClient, setAboutClient] = useState("");
  const [AboutProject, setAboutProject] = useState("");
  const SubmitHandler = async() => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("servisekind", servisekind);
    formData.append("projectKind", projectKind);
    formData.append("Year", Year);
    formData.append("ProjectCover", ProjectCover)
    formData.append("ProjectPageCover", ProjectPageCover);
    formData.append("image", image);
    formData.append("image2", image2);
    formData.append("image3", image3);
    formData.append("ClientName", ClientName);
    formData.append("ProjectDescription",ProjectDescription)
    formData.append("aboutClient",aboutClient)
    formData.append("AboutProject",AboutProject)
    const res = await fetch('/api/Project',{
        method:"POST",
        body:formData
    })

    if(res.status === 201){
      Swal.fire({
        title: "اطلاعات مورد نظر ثبت و محصول اضافه شد",
        icon: "success",
        buttons: "فهمیدم",
      })
    }else{
      Swal.fire({
        title: "مشکل فنی",
        icon: "warning",
        buttons: "فهمیدم",
      })
    }
  };

  return (
    <div className="col-span-3 w-full h-fit shadow-Box p-5">
      <div className=" grid grid-cols-2 gap-5 [&>input]:text-white [&>input]:bg-[#ffffff0d] ">
        <div className="flex flex-col gap-2  [&>input]:text-white [&>input]:bg-[#ffffff0d] [&>input]:p-2  [&>input]:rounded-xl ">
          <label for="title">نام پروژه</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-3  [&>input]:text-white [&>input]:bg-[#ffffff0d] [&>input]:p-2  [&>input]:rounded-xl ">
          <label for="servisekind">سرویس داده شده به مشتری</label>
          <input
            value={servisekind}
            onChange={(e) => setServisekind(e.target.value)}
            type="text"
            name="servisekind"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-3  [&>input]:text-white [&>input]:bg-[#ffffff0d] [&>input]:p-2  [&>input]:rounded-xl ">
          <label for="projectkind">نوع پروژه</label>
          <input
            value={projectKind}
            onChange={(e) => setProjectkind(e.target.value)}
            type="text"
            name="projectkind"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-3  [&>input]:text-white [&>input]:bg-[#ffffff0d] [&>input]:p-2  [&>input]:rounded-xl ">
          <label for="year">سال تولید</label>
          <input
            value={Year}
            onChange={(e) => setYear(e.target.value)}
            type="text"
            name="year"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-3  [&>input]:text-white [&>input]:bg-[#ffffff0d] [&>input]:p-2  [&>input]:rounded-xl ">
          <label for="cover">کاور پروژه</label>
          <input


            onChange={(e) => setProjectCover(e.target.files[0])}
            type="file"
            name="cover"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-3  [&>input]:text-white [&>input]:bg-[#ffffff0d] [&>input]:p-2  [&>input]:rounded-xl ">
          <label for="cover">کاور صفحه پروژه</label>
          <input

            onChange={(e) => setProjectPageCover(e.target.files[0])}
            type="file"
            name="cover"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-3  [&>input]:text-white [&>input]:bg-[#ffffff0d] [&>input]:p-2  [&>input]:rounded-xl ">
          <label for="firstPic">عکس اول</label>
          <input

            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            name="firstPic"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-3  [&>input]:text-white [&>input]:bg-[#ffffff0d] [&>input]:p-2  [&>input]:rounded-xl ">
          <label for="saccendPic">عکس دوم</label>
          <input

            onChange={(e) => setImage2(e.target.files[0])}
            type="file"
            name="saccendPic"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-3  [&>input]:text-white [&>input]:bg-[#ffffff0d] [&>input]:p-2  [&>input]:rounded-xl ">
          <label for="thredPic">عکس سوم</label>
          <input

            onChange={(e) => setImage3(e.target.files[0])}
            type="file"
            name="thredPic"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-3  [&>input]:text-white [&>input]:bg-[#ffffff0d] [&>input]:p-2  [&>input]:rounded-xl  ">
          <label for="clientName">اسم مشتری</label>
          <input
            value={ClientName}
            onChange={(e) => setClientName(e.target.value)}
            type="text"
            name="clientName"
            id="name"
          />
        </div>
        <div className="flex flex-col gap-3  [&>input]:text-white [&>input]:bg-[#ffffff0d] [&>input]:p-2 [&>textarea]:text-white [&>textarea]:bg-[#ffffff0d] [&>textarea]:p-2  [&>input]:rounded-xl [&>textarea]:rounded-xl ">
          <label for="discrpation">توضیحات پروژه</label>
          <textarea
            value={ProjectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            type="text"
            name="discrpation"
            id="name"
          />
        </div>

        <div className="flex flex-col gap-3  [&>input]:text-white [&>input]:bg-[#ffffff0d] [&>input]:p-2 [&>textarea]:text-white [&>textarea]:bg-[#ffffff0d] [&>textarea]:p-2  [&>input]:rounded-xl [&>textarea]:rounded-xl ">
          <label for="client-discraption">درباره مشتری</label>
          <textarea
            value={aboutClient}
            onChange={(e) => setAboutClient(e.target.value)}
            type="text"
            name="client-discraption"
            id="name"
          />
        </div>

        <div className="flex flex-col gap-3  [&>input]:text-white [&>input]:bg-[#ffffff0d] [&>input]:p-2 [&>textarea]:text-white [&>textarea]:bg-[#ffffff0d] [&>textarea]:p-2  [&>input]:rounded-xl [&>textarea]:rounded-xl ">
          <label for="project-dis">درباره پروژه</label>
          <textarea
            value={AboutProject}
            onChange={(e) => setAboutProject(e.target.value)}
            type="text"
            name="project-dis"
            id="name"
          />
        </div>
      </div>
      <div className="w-full">
        <button
          onClick={SubmitHandler}
          className="bg-blue-500 w-full rounded-md mt-5 p-3 focus:bg-blue-700 "
        >
          ثبت نمونه کار
        </button>
      </div>
    </div>
  );
}

export default Page;
