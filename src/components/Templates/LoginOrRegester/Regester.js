'use client'
import React from 'react'
import { useState } from 'react'
function Regester({ShowLogin}) {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const SubmitHandler = async()=>{
      const useData ={
        name,
        email,
        password
      }
      const req = await fetch("/api/signup",{
        method:"POST",
        body:JSON.stringify(useData)
      })
      if(req.status === 200){
        alert("user created success fully")
      }

  }
  return ( 
      <div className="shadow-Box w-[500px] h-fit flex p-5 flex-col items-center justify-center gap-5 [&>input]:w-full [&>input]:h-10 [&>input]:border-2 [&>input]:border-none [&>input]:rounded-md [&>input]:p-2 [&>input]:text-white [&>input]:bg-[#ffffff0d] [&>input]:outline-none">
                <input onChange={(e)=>setName(e.target.value)}  value={name} type="text" placeholder='لطفا نام خود را وارد کنید'/>
                <input onChange={(e)=>setEmail(e.target.value)} value={email}  type="email" placeholder='لطفا ایمیل خود را وارد کنید'/>
                <input onChange={(e)=>setPassword(e.target.value)} value={password}  type="text" placeholder='لطفا رمز عبور خود را وارد کنید'/>
                <button className='w-full bg-blue-950 py-2 rounded-lg' onClick={SubmitHandler}>ثبت</button>
                <div className='flex'>
                    <p>حساب کاربری دارید؟</p>
                    <button onClick={()=>ShowLogin()} >وارد شوید</button>
                </div>
        </div>
  )
}

export default Regester
