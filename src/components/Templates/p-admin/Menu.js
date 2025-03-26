"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

function Menu() {
  const router = useRouter();
  const menuList = [
    {
      name: "داشبورد",
      link: "/p-admin",
    },
    {
      name: "پیام ها",
      link: "/p-admin/Massages",
    },
    {
      name: "نمونه کارها",
      link: "/p-admin/ListOfProjects",
    },
    {
      name: "ساخت نمونه کار",
      link: "/p-admin/CreateNewProject",
    },
  ];

  const logoutHandler = async () => {
    Swal.fire({
      title: "خروج",
      text: "ایا از خروج اطمینان دارید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch("/api/Logout", { method: "POST" });
        if (res.status === 200) {
          router.push("/");
        }
      }
    });
  };


  return (
    <div>
      <div className="sticky top-5 left-0 h-fit w-full">
        <div className="col-span-1 h-fit shadow-Box ">
          <ul className="w-full h-full p-5 flex flex-col gap-5">
            {menuList.map((item, index) => (
              <li key={index} className="">
                <Link href={item.link} className="text-xl">
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="text-red-600 cursor-pointer" onClick={logoutHandler}>
              خروج
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
