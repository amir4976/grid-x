import StarTitle from '@/components/Templates/StarTitle/StarTitle'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'
import MassageList from '@/components/Templates/p-admin/massageList'
import ProjectCard from '@/components/Templates/ProjectsCard/ProjectCard'
import ShortMassageList from '@/components/Templates/p-admin/ShortMassageList'
import MassagesModel from '@/models/Massages'
import ProjectModel from '@/models/Projects'
import ConnectToDb from '@/utils/ConnectToDb'
async function page() {
    ConnectToDb()
    const token = cookies().get("token")?.value
    if(!token){
        redirect("/")
    }
    const Massages = await MassagesModel.find({}).limit(5)
    const lastWorkFind = await ProjectModel.find({}).sort({_id:-1}).limit(1)
    const lastWork = lastWorkFind[0]
  return (
    
            <div className="col-span-3  h-fit gap-5 grid grid-cols-1 sm:grid-cols-5">
                <div className="col-span-3 h-fit shadow-Box p-5">
                    <ShortMassageList massages={JSON.parse(JSON.stringify(Massages))} />
                </div>
                <div className="col-span-2 h-fit shadow-Box p-5">
                    <span>اخرین پروژه</span>
                    {
                        lastWork ? (
                    <ProjectCard img={lastWork.ProjectCover} title={lastWork.title} desc={lastWork.projectkind} link={lastWork._id}/>
                        ):(
                            <p className='mt-5 text-gray-500'>فعلا دوره ای وجود ندارد</p>
                        )


                    }
                </div>
            </div>

  )
}

export default page
