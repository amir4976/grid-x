'use client'
import {react, useEffect,useState } from "react";
import ProjectCard from "@/components/Templates/ProjectsCard/ProjectCard";
import Image from "next/image";


function myWork() {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(()=>{
    const getData = async()=>{
    const res = await fetch("/api/Project",{ next: { revalidate: 0 } })
    const data = await res.json()
    if(res.ok){
      setAllProjects(data)
    }
      
  }
  getData();
  
},[])
    return (

    <div className="mt-16">
      <div className="page-title flex items-center">
        <div className="star">
          <Image src={"/star-2.png"} alt="star" width={50} height={50} />
        </div>
        <p className="text-4xl">پروژه های من </p>
        <div className="star">
          <Image src={"/star-2.png"} alt="star" width={50} height={50} />
        </div>
      </div>

      <div className="gap-5 columns-1 md:columns-2 lg:columns-3">
        {allProjects.map((proj) => (
          <ProjectCard
            key={proj._id}
            link={proj._id}
            img={proj.ProjectCover}
            title={proj.title}
            desc={proj.servisekind}
          />
        ))}
      </div>
      {!allProjects.length ? (
        <p className="text-center my-5 text-gray-600">هنوز نمونه موجود نیست</p>
      ) : null}
    </div>
  );
}

export default myWork;
