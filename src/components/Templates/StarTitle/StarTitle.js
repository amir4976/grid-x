import React from "react";
import Image from "next/image";
function StarTitle({title}) {
  return (
    <div className="flex  items-center gap-2 text-3xl">
      <Image src={"/star-2.png"} alt="star" width={50} height={50} />
      <div className="">{title}</div>
      <Image src={"/star-2.png"} alt="star" width={50} height={50} />
    </div>
  );
}

export default StarTitle;
