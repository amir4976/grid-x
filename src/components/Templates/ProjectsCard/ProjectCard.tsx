import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function ProjectCard({img,title,desc,link}) {
  return (
    <div className=' w-full h-fit  col-span-1 shadow-Box p-3 mt-5' data-aos="zoom-in">
      <div className="w-full h-fit relative">
        <Image src={img} width={500} height={500} alt='cover' className='w-full h-full object-cover rounded-2xl ' />
      </div>
        <div className="flex justify-between items-center mt-3">
        <div className="">
            <p className='text-xl font-bold mt-3'>{title}</p>
            <p className='text-sm text-gray-500'>{desc}</p>
        </div>
        <Link href={`/My-works/${link}`} >
        <Image src={'/icon.svg'} alt='star' width={50} height={50} className=' opacity-35 rotate-180 hover:opacity-100 transition-all'/>
        </Link>
        </div>
    </div>
  )
}

export default ProjectCard
