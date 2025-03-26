'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import AOS from 'aos';
function PreLoader() {
    const [isMount ,setIsMount] = useState(false)
    useEffect(()=>{
        AOS.init();
        setIsMount(true)
    })
  return (
    <div className={` absolute left-0 w-full h-52 bottom-0 opacity-0 bg-[#1c1b1b] z-50 flex justify-center items-center ${isMount ? 'slideIn' : ''} transition-all `}>
        
    </div>
  )
}

export default PreLoader
