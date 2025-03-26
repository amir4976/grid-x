import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
      {/* short bio */}
      <div className="grid grid-cols-1 md:gap-5 md:p-0 p-5   mt-16 md:grid-cols-3">
        <div className="col-span-1   p-6 shadow-Box " data-aos="zoom-in">
          <div className=" relative h-80">
            <Image className='rounded-xl w-full h-full object-cover' src="/me/aboutmeImage.jpg" alt="me" width={400} height={400}  />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-5 " data-aos="zoom-in">
          <div className="title text-center text-7xl  ">خلاصه ای ازمن</div>
          <div className="shadow-Box p-5 pb-10 h-full relative flex justify-end flex-col gap-5">
              <div className=" absolute top-0 right-5">
                <Image src="/icon2.png" alt="icon" width={30} height={30} />
              </div>
            <span className="text-3xl">امیرحسین احمدی</span>
            <p className='text-sm'>
            من یک طراح وب مستقر در ایران با تمرکز بر طراحی وب هستم. من طیف متنوعی از تجربیات را دارم چرا که در زمینه ها و صنایع مختلف کار کرده ام.
            </p>

          </div>
        </div>
      </div>
      {/* end short bio */}
      {/* info */}
      <div className="p-5">
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2" >
        <div className="col-span-1 p-6 shadow-Box mt-2 " data-aos="zoom-in">
        <div>تجربیات</div>
        <div className="flex flex-col gap-1">
          <span className='text-gray-600 mt-2'>1400 -1402</span>
          <span>توسعه دهنده فرانت اند</span>
          <span className=' text-gray-600'>فریلنسر</span>
        </div>
        </div>
        <div className="col-span-1 p-6 shadow-Box  " data-aos="zoom-in">
        <div >تحصیل</div> 
        <div className="flex flex-col gap-1 mt-2">
          <span className='text-gray-600'>1400 -تا الان</span>
          <span>لیسانس علوم کامپیوتر</span>
          <span className=' text-gray-600'>دانشگاه ازاد اسلامی کرج</span>
        </div>
        </div>
        </div>
      </div>
      {/* info end */}
    </div>
  )
}

export default page
