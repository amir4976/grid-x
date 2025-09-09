import React from "react";
import Image from "next/image";
import Link from "next/link";
function StarTitle({title,demoLink}) {
    console.log(demoLink)
  return (

    <div className="flex justify-between">
          <div className="flex  items-center gap-2 text-3xl">
      <Image src={"/star-2.png"} alt="star" width={50} height={50} />
      <div className="">{title}</div>
      <Image src={"/star-2.png"} alt="star" width={50} height={50} />
    </div>

    <Link className="  rounded-md hover:bg-purple-500 bg-gray-500 transition-all px-4 flex justify-center items-center " href={`${demoLink}`}>نمایش دمو</Link>
    </div>
  );
}

export default StarTitle;
