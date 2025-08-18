import ProjectCard from "@/components/Templates/ProjectsCard/ProjectCard";
import Image from "next/image";

async function getAllProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_MAIN_PATH}/api/Project`, {
    cache: "no-store", // یا "force-cache" اگر دیتات زیاد تغییر نمی‌کنه
  });
  return res.json();
}

export default async function MyWork() {
  const allProjects = await getAllProjects();

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
        {allProjects.length ? (
          allProjects.map((proj) => (
            <ProjectCard
              key={proj._id}
              link={proj._id}
              img={proj.ProjectCover}
              title={proj.title}
              desc={proj.servisekind}
            />
          ))
        ) : (
          <p className="text-center my-5 text-gray-600">
            هنوز نمونه موجود نیست
          </p>
        )}
      </div>
    </div>
  );
}
