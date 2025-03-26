'use client'
import React from 'react'
import {useState} from 'react'
import { useRouter } from 'next/navigation'
function Login({ShowRegester}) {
  const router = useRouter()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const SubmitHandler = async()=>{
      const useData ={
        email,
        password
      }
      const req = await fetch("/api/Login",{
        method:"POST",
        body:JSON.stringify(useData)
      })
      if(req.status === 200){
        router.push("/p-admin")
      }else if(req.status === 201){
        router.push("/")
      }
    }
  return (
    <div className="shadow-Box w-[500px] h-fit flex p-5 flex-col items-center justify-center gap-5 [&>input]:w-full [&>input]:h-10 [&>input]:border-2 [&>input]:border-none [&>input]:rounded-md [&>input]:p-2 [&>input]:text-white [&>input]:bg-[#ffffff0d] [&>input]:outline-none">
    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='لطفا ایمیل خود را وارد کنید'/>
    <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='لطفا رمز عبور خود را وارد کنید'/>
    <button className='w-full bg-blue-950 py-2 rounded-lg' onClick={SubmitHandler}>ثبت</button>
    <div className='flex'>
        <p>حساب کاربری ندارید؟</p>
        <button  onClick={()=>ShowRegester()} >ثبت نام کنید</button>
    </div>
</div>
  )
}

export default Login
