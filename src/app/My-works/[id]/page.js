
import StarTitle from "@/components/Templates/StarTitle/StarTitle";
import React from "react";
import Image from "next/image";
import ConnectToDb from "@/utils/ConnectToDb";
import ProjectModel from "@/models/Projects";
import { redirect } from "next/navigation";
import Bradcramp from "@/components/Modules/bradcramp/Bradcramp";


async function page({params}) {
  const {id} = params;
  ConnectToDb()
  const proj = await ProjectModel.findOne({_id:id});
  if(!proj) return redirect("/404")

  return (
    <div className=" ">
      {/* title */}
      <Bradcramp title={proj.projectKind + "-" + proj.title}/>
      <StarTitle title={proj.title} />
      {/* title end */}

      {/* cover */}
      <div className="rounded-xl  w-full right-0 mt-5 z-0 flex ">
        <div className="cover relative w-full h-[500px] max-md:h-[200px] rounded-xl  ">
          <Image src={proj.ProjectPageCover} alt="cover" width={1280} height={720} className={'w-full h-full object-cover rounded-xl'} />
        </div>
      </div>
      {/* cover end */}
      {/* about */}
      <div className="shadow-Box h-fit w-full flex gap-2 mt-10 relative  max-md:flex-col max-md:p-3  max-md:mt-[25 0px]">
        <div className="shadow-Box w-full m-3 flex flex-col gap-5 p-5 max-md:m-0">
          <span className={"text-gray-500 w-full "}>مشتری</span>
          <p>
            {
              proj.aboutClient
            }
          </p>
        </div>
        <div className="max-md:hidden">
          <Image src={"/icon2.png"} width={100} height={100} alt="icon"  />
        </div>
        <div className="shadow-Box w-full m-3 flex flex-col gap-5 p-5 max-md:m-0">
          <span className={"text-gray-500 w-full "}>درباره پروژه</span>
          <p>
            {
              proj.AboutProject
            }
          </p>
        </div>
      </div>
      {/* about end */}
      {/* gallery  */}
      <div className=" w-full h-fit mt-10">
        <Image
          src={proj.image1}
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto", borderRadius: "20px" }}
        />
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
          <Image
            src={proj.image2}
            className="cols-span-1"
            width={1280}
            height={720}
            style={{ width: "100%", height: "auto", borderRadius: "20px" }}
          />
          <Image
            src={proj.image3}
            className="cols-span-1"
            width={1280}
            height={720}
            style={{ width: "100%", height: "auto", borderRadius: "20px" }}
          />
        </div>
      </div>
      {/* gallery end  */}

      {/* details */}
      <div className="shadow-Box w-full grid grid-cols-1 md:grid-cols-3  gap-5 p-5 mt-10">
        <div className="col-span-1 shadow-Box p-5">
          <div className=" absolute left-1 top-0">
            <Image
              src={"/icon2.png"}
              alt="star"
              width={50}
              height={50}
              className=""
            />
          </div>
          <div className="mt-4">
            <span className="text-gray-500 w-full ">سال</span>
            <p>{proj.Year}</p>
          </div>
          <div className="mt-4">
            <span className="text-gray-500 w-full ">مشتری</span>
            <p>{proj.ClientName}</p>
          </div>
          <div className="mt-4">
            <span className="text-gray-500 w-full ">خدمات</span>
            <p>{proj.servisekind}</p>
          </div>
          <div className="mt-4">
            <span className="text-gray-500 w-full ">پروژه</span>
            <p>{proj.projectKind}</p>
          </div>
        </div>
        <div className="col-span-2 p-5">
          <span className="text-gray-500 w-full ">شرح</span>
          <p className="mt-4">
            {
              proj.ProjectDescription
            }
          </p>
        </div>
      </div>
      {/* details end */}
    </div>
  );
}

export default page;
