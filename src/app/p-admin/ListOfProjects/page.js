"use client";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

function page() {
  const [projects, setProjects] = React.useState([]);
  useEffect(() => {
    fetch("/api/Project")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

 const DeleteHandler =async (id) =>{

    const res = await fetch(`/api/Project/${id}`,{
      method:"DELETE"
    })
  
   if(res.status == 201){
    setProjects(projects.filter((project) => project._id !== id));
    Swal.fire({
      title:"delete"
      ,text:"deleted"
      ,icon:"success"
      ,timer:1000
    })
   }
 }
  return (
    <div className="p-3 col-span-3  shadow-Box">
      <table className="w-full table-auto text-center mb-3 ">
        <thead className=" text-sm text-gray-500">
          <tr>
            <th>شماره</th>
            <th>نام پروژه</th>
            <th>نوع پروژه</th>
            <th>نام مشتری</th>
            <th>تاریخ ایجاد</th>
            <th>تاریخ انتشار</th>
            <th>حذف</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((Proj,index) => (
            <tr className="odd:shadow-Box p-4 rounded-xl mt-2 text-orange-400 ">
              <td>{index+1}</td>
              <td>{Proj.title}</td>
              <td>{Proj.projectKind}</td>
              <td>{Proj.ClientName}</td>
              <td>{new Date(Proj.createdAt).toLocaleString("fa-IR")}</td>
              <td>{Proj.Year}</td>
              <td>
                <button className="p-2 bg-red-600 rounded-xl text-white" onClick={() => DeleteHandler(Proj._id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default page;
