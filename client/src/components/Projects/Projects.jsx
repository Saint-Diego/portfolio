import Project from "./Project.jsx";

const projects = [
  {
    image:
      "https://res.cloudinary.com/dah19wrh1/image/upload/v1667541784/dev/assets/project-pf-libreria.png",
    name: "Librería e-commerce",
    urlDeploy: "https://don-quijote.vercel.app/",
    urlRepo: "https://github.com/SenDan07/PF-ECommerce",
    status: true,
  },
  {
    image:
      "https://res.cloudinary.com/dah19wrh1/image/upload/v1667541922/dev/assets/project-pi-countries.png",
    name: "Countries PI",
    urlDeploy: "https://front-end-countries.vercel.app/",
    urlRepo: "https://github.com/Saint-Diego/PI-Countries-main",
    status: true,
  },
  {
    image:
      "https://res.cloudinary.com/dah19wrh1/image/upload/v1667539259/dev/assets/page-en-construccion.png",
    name: "Books",
    urlDeploy: "",
    urlRepo: "https://github.com/Saint-Diego/books",
    status: false,
  },
];

const Projects = () => {
  return (
    <div className="container container-height my-5">
      <div className="d-flex">
        {projects.map((project, idx) => (
          <Project
            key={`project-${idx + 1}`}
            image={project.image}
            name={project.name}
            urlDeploy={project.urlDeploy}
            urlRepo={project.urlRepo}
            status={project.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
