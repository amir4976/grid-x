'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Style from "./Navbar.module.css";
import { RiHome2Fill } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { usePathname } from "next/navigation";

function Navbar() {
  const route = usePathname()
  
  return (<>
    <div className="w-full h-20 px-4  justify-between items-center mt-4 hidden md:flex">
      <div className="logo">
        <Image src={"/logo.svg"} alt="logo" width={70} height={70} />
      </div>
      <div className="list">
        <ul className={`${Style.List} flex gap-x-12 `}>
          <li className={route=== "/" ? Style.listActive : ''}>
            <Link href={"/"}>خانه</Link>
          </li>
          <li className={route=== "/aboutMe"? Style.listActive : ''}>
            <Link href={"/aboutMe"}>درباره من </Link>
          </li>
          <li className={route=== "/My-works" ? Style.listActive : ''}>
            <Link href={"/My-works"}>کارهای من</Link>
          </li>
          <li className={route=== "/ContactMe" ? Style.listActive : ''}>
            <Link href={"/ContactMe"}>تماس با من</Link>
          </li>
          <li className={route=== "/servicses" ? Style.listActive : ''}>
            <Link href={"/servicses"}>خدمات</Link>
          </li>
        </ul>
      </div>
      <div className="contact">
        <Link href={'/ContactMe'} className="px-5 py-2 rounded-xl text-white transition-all hover:bg-white hover:text-black bg-gradient-to-r from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.05)]">
         بیا صحبت کنیم
        </Link>
      </div>
    </div>

    <div className="w-full h-20 fixed z-50 -bottom-1   flex md:hidden px-3">
      <div className="flex justify-center w-full  backdrop-blur-xl  border border-gray-500 rounded-t-3xl items-center ">
      <ul className={`${Style.List} flex text-xl justify-between w-full items-center px-10
      `}>
          <li >
            <Link href={"/"}  className={route == "/" ? Style.listActive : ''}><RiHome2Fill/></Link>
          </li>
          <li>
            <Link href={"/aboutMe"} className={route=== "/aboutMe" ? Style.listActive : ''}><FaInfoCircle/></Link>
          </li>
          <li>
            <Link href={"/My-works"} className={route=== "/My-works" ? Style.listActive : ''}><RiGalleryFill/></Link>
          </li>
          <li>
            <Link href={"/ContactMe"} className={route=== "/ContactMe" ? Style.listActive : ''}><IoIosCall/></Link>
          </li>
        </ul>
      </div>
    </div>
  </>
  );
}

export default Navbar;
