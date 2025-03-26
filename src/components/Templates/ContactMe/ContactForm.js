'use client'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [massage, setMassage] = useState('')

  const handleSubmit = async (e) => {
    const data = {
      name,
      email,
      title,
      massage
    }
    const res = await fetch('/api/Massages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    if(res.status == 201){
      Swal.fire({
        title:"ثبت پیام",
        text:"پیام با موفقیت ثبت شد",
        icon:"success",
        confirmButtonText:"باشه"

      })
    }
  }
  return (
    <div className='relative p-5' data-aos="zoom-in">
        <div className="icon absolute left-10 top-0">
            <Image src={"/icon2.png"} alt="logo" width={20} height={20} />
        </div>
      <div className="contact-form-title p-5 text-4xl">
       <p>بیاید با هم <span className='text-purple-600 '>در تماس باشیم</span></p>
      </div>

      <div className="inputs">
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="w-full h-14 rounded-2xl mt-3 outline-none p-4 bg-gray-700/10" placeholder='نام و نام خانوادگی' />
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full h-14 rounded-2xl mt-3 outline-none p-4 bg-gray-700/10" placeholder='ایمیل' />
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="w-full h-14 rounded-2xl mt-3 outline-none p-4 bg-gray-700/10" placeholder='عنوان شما' />
            <textarea type="text" value={massage} onChange={(e)=>setMassage(e.target.value)} rows={'5'} className="w-full  rounded-2xl mt-3 outline-none p-4 bg-gray-700/10" placeholder='پیام شما' />
            <button onClick={()=>handleSubmit()} className='w-full h-14 rounded-2xl mt-3 outline-none p-4 bg-purple-600 text-white'>ارسال پیام</button>
        </div>
    </div>
  )
}

export default ContactForm
