import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { FaBugSlash } from "react-icons/fa6";
import { GoCodescanCheckmark } from "react-icons/go";
import { IoMdDoneAll } from "react-icons/io";

function page() {
  return (
    <div className="grid grid-cols-1 gap-0 md:grid-cols-3 mt-5  md:gap-5">
        {/* list side */}
      <div className="col-span-1 " data-aos="zoom-in">
        <div className=" shadow-Box flex p-5 flex-col justify-center items-start">
          <div className=" flex text-3xl my-10 gap-4">
            <BsCodeSlash />
            <span className="text-xl">توسعه برنامه</span>
          </div>
          <div className=" flex text-3xl my-10 gap-4">
            <GoCodescanCheckmark />
            <span className="text-xl">تست برنامه</span>
          </div>
          <div className=" flex text-3xl my-10 gap-4">
            <FaBugSlash />
            <span className="text-xl">دی باگ کردن برنامه</span>
          </div>

          <div className=" flex text-3xl my-10 gap-4">
            <IoMdDoneAll />
            <span className="text-xl">تحویل برنامه</span>
          </div>
        </div>
      </div>
    {/*  end list side */}
    {/* text-side */}
      <div className="col-span-2 shadow-Box grid grid-cols-1 my-10 gap-5 md:grid-cols-2 md:my-0 p-3" data-aos="zoom-in">
        <div className="shadow-Box p-5" data-aos="zoom-in">
          <div className="text-gray-500 my-2" >توسعه برنامه</div>
          <p>
            من با تخصص در توسعه برنامه های تحت وب و وب اپلیکیشن توانایی تبدیل ایدها به نرم افزار های کاربردی و کارامد را دارم و ازفریم ورک react وnext jsاستفاده میکنم تا رابط های کاربری زیبا و عملکرد بالا ارائه دهم 
          </p>
        </div>
        <div className="shadow-Box p-5" data-aos="zoom-in">
          <div className="text-gray-500 my-2" >تست برنامه</div>
          <p>
              برای اطمینان از عملکرد صحیح و بدون نقص نرم افزار  فرایند تست برنامه را با استفاده از ابزار های تکنیک های پیشرفته مانند تست واحد تست ادغام وتست سیستماتیک انحام میدهم این کار به تضمین کیفیت بالای محصول نهایی کمک میکند
          </p>
        </div>
        <div className="shadow-Box p-5" data-aos="zoom-in">
          <div className="text-gray-500 my-2" >دی باگ برنامه</div>
          <p>
              
               
               دی باگ کردن برنامه و رفع اشکال بخش حیاتی از توسعه نرم افزار است با استفاده از مهارت های تخصصی در تحلیل و شناسایی باگ ها نرم افزار را بهینه سازی کرده و مشکلات ان را به سرعت و دقت حل میکنم  تا عملکرد بهینه ای داشته باشد   
          </p>
        </div>
        <div className="shadow-Box p-5" data-aos="zoom-in" >
          <div className="text-gray-500 my-2" >تحویل پروژه</div>
          <p>
            پس از تکمیل توسعه و تست برنامه نهایی را به مشتری تحویل داده و در صورت نیاز به تنظیمات و پشتیبانی در کنار شما خواهم بود .تضمین میکنم که پروژه به موقع و با کیفیتی مطلوب به پایان برسد.
          </p>
        </div>
      </div>
      {/* end text-side */}
    </div>
  );
}

export default page;
