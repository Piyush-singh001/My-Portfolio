function Project() {
  const projects = [
    {
      name: "E-commerce web site",
      imageUrl: "/images/website1.png",
      projectLink: "https://piyush-singh001.github.io/Ecommerce-website/",
    },
    {
      name: "Movie Trailor Search",
      imageUrl: "/images/movie.png",
      projectLink: "https://movie-search-app-lhrb.vercel.app/",
    },
    {
      name: "Movie Trailor Search",
      imageUrl:
        "https://t4.ftcdn.net/jpg/05/87/96/55/360_F_587965572_9LpEJeVfE7V53ikuT1req9o08iMXlyjs.jpg",
      projectLink: "https://movie-search-app-lhrb.vercel.app/",
    },
    {
      name: "E-commerce web site",
      imageUrl:
        "https://t4.ftcdn.net/jpg/05/87/96/55/360_F_587965572_9LpEJeVfE7V53ikuT1req9o08iMXlyjs.jpg",
      projectLink: "https://piyush-singh001.github.io/Ecommerce-website/",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-20 pt-10">
      {projects.map((project, i) => (
        <div
          key={i}
          className="w-[160px] sm:w-[180px] md:w-[400px] h-[400px] sm:h-[180px] md:h-[400px] 
                       flex-shrink-0 bg-gray-100 rounded-xl shadow-md 
                       hover:scale-105 transition"
        >
          <div className="text-4xl mb-2 p-2 rounded-2xl h-3/4">
            <img
              className="rounded-xl object-cover object-center w-full h-full"
              src={project.imageUrl}
              alt="#"
            />
          </div>
          <div className="flex flex-col items-start px-3">
            <p className="text-sm text-gray-700 text-start ">{project.name}</p>
            <a
              className=""
              target="_blank"
              rel="noopener noreferrer"
              href={project.projectLink}
            >
              View Here
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
