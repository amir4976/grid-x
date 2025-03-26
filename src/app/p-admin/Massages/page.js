"use client";
import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useState } from "react";
function MassageList() {
  const [AllMassages , setAllMassages] = useState([])
  
  
  useEffect(()=>{
    const getMassages = async()=>{
      const res = await fetch("/api/Massages",{cache:"no-store"})
      const data = await res.json()
      setAllMassages(data)
    }
    getMassages()
    },[])
  
  
  const ShowMassage = (massage) => {
    Swal.fire({
      title: "متن پیام",
      text: massage,
      icon: "info",
      confirmButtonText: "باشه",
    });
  };

  async function DeleteMassageHandler(id){
      const res= await fetch(`/api/Massages/${id}`,{method:"DELETE"})
      if(res.status==200){
        Swal.fire({
          title: "حذف پیام",
          text: 'حذف پیام با موفقیت انجام شد',
          icon: "success",
          confirmButtonText: "باشه",
        })
        setAllMassages(AllMassages.filter((massage)=> massage._id !== id))
      }
  }
  return (
    <div className="col-span-3 ">
      
      <div className="p-5 shadow-Box">
        <span className="w-full fit h-16 text-xl text-green-500 block">پیام های شما</span>
        <table className=" w-full h-fit text-center ">
          <thead>
            <tr>
              <th>نام</th>
              <th>عنوان</th>
              <th>ایمیل</th>
              <th>نمایش</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {AllMassages.map((massage) => (
              <tr key={massage._id}>
                <td>{massage.name}</td>
                <td>{massage.title}</td>
                <td>{massage.email}</td>
                <td>
                  <button
                    onClick={() => ShowMassage(massage.massage)}
                    className="bg-purple-600 text-white p-2 rounded-md"
                  >
                    نمایش
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => DeleteMassageHandler(massage._id)}
                    className="bg-red-600 text-white p-2 rounded-md"

                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MassageList;
