import { useEffect, useState } from "react";
import "../css/project_detail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projectDetailList } from "../repo/project_detail";
import { BiCheck } from "react-icons/bi";
const Projects = () => {
  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState(projectDetailList[0]);
  const navigator = useNavigate();
  useEffect(() => {
    if (id) {
      const findIndex = projectDetailList.findIndex(
        (project) => project.id === id
      );
      setCurrentProject(projectDetailList[findIndex]);
    }
  });
  const projectList = [
    {
      title: "Front End Devlopment",
      description: "very sweet description",
      skills: ["React.js", "Figma", "Redux"],
      bgcolor: "white",
      img: "/assets/project_11.png",
      id: "project-1",
      client: "GIT",
      type: "App",
      year: "2023",
    },
    {
      title: "Full Stack Development",
      description: "very sweet description",
      skills: ["Flutter", "Dart", "Node.js"],
      bgcolor: "purple",
      img: "/assets/project_21.png",
      id: "project-2",
      client: "Litend",
      year: "2023",
      type: "App",
    },
    {
      title: "UI Design",
      description: "very sweet description",
      skills: ["Figma", "Wire Frame"],
      bgcolor: "blue",
      img: "/assets/project_31.png",
      id: "project-3",
      client: "YD",
      year: "2023",
      type: "Design",
    },
  ];
  return (
    <section className="section-detail-wrapper">
      <div className="mx-auto section-detail max-width px-2 mb-100 mt-50">
        <h1 className="mb-50 font-weight-400">{currentProject.title}</h1>
        {/* tool used client name,budget,year */}
        <div className="detail-intro">
          <div>
            <p>Client</p>
            <p className="text-white-variant-2">{currentProject.client}</p>
          </div>
          <div>
            <p>Service</p>
            <p className="text-white-variant-2">{currentProject.service}</p>
          </div>
          {currentProject.isSite && (
            <Link
              className="btn-custom"
              to={currentProject.link}
              target="_blank"
            >
              View site
            </Link>
          )}
        </div>
        {/*  */}
        {currentProject.mobile ? (
          <div
            className={`detail-img-wrapper-mob-1 mb-50 ${currentProject.bgcolor}`}
          >
            <img
              className="img-left"
              src={currentProject.heroImg}
              alt={currentProject.title}
            />
          </div>
        ) : (
          <div
            className={`detail-img-wrapper-1 mb-50 ${currentProject.bgcolor}`}
          >
            <img
              className="img-left"
              src={currentProject.heroImg}
              alt={currentProject.title}
            />
            <img
              className="img-right"
              src={currentProject.heroImg2}
              alt={currentProject.title}
            />
          </div>
        )}
        {/* tools */}
        <div className="mb-50">
          <p className="mb-4">Tools</p>
          {currentProject.tools.map((tools, index) => (
            <span key={index} className="tools mb-4">
              {tools}
            </span>
          ))}
        </div>
        <h1 className="font-weight-400 mb-4">Project Overview</h1>
        {currentProject.overview.map((paragraph, index) => (
          <p className="text-white-variant-2 detail-text mb-4" key={index}>
            {paragraph}
          </p>
        ))}
        {/* second img */}
        <div className="detail-img-wrapper-2 mb-50 mt-100">
          <img src={currentProject.secondImg} alt={currentProject.title} />
        </div>
        <h1 className="font-weight-400 mb-4">What i did</h1>
        <ul className="mb-50 text-white-variant-2 detail-text">
          {currentProject.whatIDid.map((points, index) => (
            <li key={index} className="d-flex ps-2 ">
              {/* <p>{points.title}</p> */}
              <BiCheck className="me-2" fontSize={25} />
              <p className="mb-4">{points.desc}</p>
            </li>
          ))}
        </ul>
        {currentProject.isSite && (
          <Link className="btn-custom" target="_blank" to={currentProject.link}>
            Visit Website
          </Link>
        )}
      </div>
      {/* similar work */}
      <div className="max-width mx-auto px-2 mb-50">
        <h1 className="mb-50 font-weight-400">Similar works</h1>
        {/* cards */}
        <div className="similar-work-card-wrapper">
          {projectList.map((project, index) => (
            <div
              className="similar-work-card cursor-pointer"
              key={index}
              onClick={() => {
                navigator(`/projects/${project.id}`);
              }}
            >
              {/* imgs */}
              <div className="img-wrapper mb-4">
                <img src={project.img} alt="" />
              </div>
              <h2 className="font-weight-400">{project.client}</h2>
              <div className="card-info text-white-variant-2">
                {/* <span>{project.client}</span> */}
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
