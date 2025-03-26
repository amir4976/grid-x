
import ContactCard from '@/components/Templates/ContactMe/ContactCard'
import React from 'react'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { LiaSquareFullSolid } from "react-icons/lia";
import ContactForm from '@/components/Templates/ContactMe/ContactForm';
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 mt-16 gap-5' data-aos="zoom-in">
        <div className="col-span-1 flex flex-col justify-between">
          <ContactCard title={'ایمیل'} value={'Amirhossinahmadi4976@gmail.com'} value2={'Amirhosianahmadi4976@gmail.com'} icon={<MdEmail/>}/>
          <ContactCard title={'تلفن'} value={'+980000000'} value2={'+980000000'} icon={<BsFillTelephoneFill/>}/>
          <ContactCard title={'ادرس'} value={'کرج'} value2={'ماهدشت'} icon={<LiaSquareFullSolid/>}/>
          <div className="socialmedia flex flex-col gap-4">
              <div className="title">شبکه های اجتماعی</div>
              <div className="flex justify-between py-5 ">
                <button className='w-20 h-20 hover:bg-white transition-all text-2xl hover:text-black shadow-Box flex justify-center items-center'><AiFillInstagram/></button>
                <button className='w-20 h-20 hover:bg-white transition-all text-2xl hover:text-black shadow-Box flex justify-center items-center'><FaTelegramPlane/></button>
                <button className='w-20 h-20 hover:bg-white transition-all text-2xl hover:text-black shadow-Box flex justify-center items-center'><FaGithub/></button>
              </div>
          </div>
        </div>
        <div className="col-span-2 shadow-Box">
          <ContactForm/>
        </div>
    </div>
  )
}

export default page
