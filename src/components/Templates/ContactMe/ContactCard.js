import React from "react";

function ContactCard({ title, value , value2 , icon }) {
  return (
    <div>
      <div className="w-full h-fit flex ">
        <div className="w-20 h-20 shadow-Box flex justify-center items-center text-2xl">
          {icon}
        </div>

        <div className="titles flex flex-col justify-center items-start mr-3"> 
          <div className="text-gray-500 text-xs text-right">{title}</div>
          <div className="">{value}</div>
          <div className="">{value2}</div>
        </div>


      </div>
    </div>
  );
}

export default ContactCard;
