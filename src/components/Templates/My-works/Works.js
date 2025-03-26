// "use client";
// import { useState, useEffect } from "react";
// import ProjectCard from "@/components/Templates/ProjectsCard/ProjectCard";
// import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// function Works() {
//   const [allProjects, setAllProjects] = useState([]);

//   const { data, error, mutate } = useSWR("/api/projects", fetcher);

//   if (error) return <div>Failed to load projects</div>;
//   if (!data) return <div>Loading...</div>;


//   return (
//     <>
//       <div className=" gap-5 columns-1 md:columns-2 lg:columns-3">
//         {allProjects.map((proj) => (
//           <ProjectCard
//             link={proj._id}
//             img={proj.ProjectCover}
//             title={proj.title}
//             desc={proj.servisekind}
//           />
//         ))}
//       </div>
//       {!allProjects.length ? (
//         <p className="text-center  my-5 text-gray-600">هنوز نمونه موجود نیست</p>
//       ) : (
//         ""
//       )}
//     </>
//   );
// }

// export default Works;




// Define the fetcher function that SWR will use

function Works() {
  // Use SWR to fetch the projects data
  
  return (
    <>
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
    </>
  );
}

export default Works;
