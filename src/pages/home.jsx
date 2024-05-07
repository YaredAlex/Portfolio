import "../css/home.css";
import "../css/nav.css";
import "../css/projects.css";
import "../css/service.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Services from "./service";
import LetsTalk from "../components/lets_discuss";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "iconsax-react";
const Home = () => {
  const ref = useRef();
  const heroRef = useRef();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const heroProgress = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(
    heroProgress.scrollYProgress,
    [0, 1],
    [1, 0]
  );

  return (
    <>
      <div
        className="home text-white-variant-1 px-2"
        style={{ position: "relative" }}
      >
        <motion.div
          ref={heroRef}
          style={{ opacity: heroOpacity }}
          className="section-home"
        >
          <div className="hero-wrapper">
            <div className="order-2 order-lg-1">
              <h2 className="hero-name pb-20">
                Hi there <span>👋</span> I am
              </h2>
              <motion.h1
                style={{}}
                initial={{
                  transform: "rotate3d(0,1,0,120deg)",
                  perspective: "1000px",
                }}
                animate={{
                  transform: "rotate3d(0,1,0,0deg)",
                }}
                transition={{ duration: 1.2 }}
                className="hero-title text-uppercase"
              >
                <span></span>APP Developer AND <span>Designer</span>
              </motion.h1>
              <button
                className="btn-custom-2 mt-20"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Work with me
              </button>
            </div>
            <div className="hero-img order-1 order-lg-2"></div>
          </div>
        </motion.div>
      </div>
      {/* <HeroPart /> */}
      {/*  */}
      <div className="bg-black-variant-1">
        <div
          className="self-description text-white-variant-1 d-flex flex-column
           mx-auto justify-content-between  "
        >
          <div>
            <h5 className="pb-50">Who i am</h5>
          </div>
          <h1 className="mb-0 ">
            <span>
              As a Senior Developer, I aspire to drive positive change through
              technology.
            </span>
          </h1>
        </div>
      </div>
      {/*  */}
      <motion.div
        style={{
          width: "100%",
          height: "500px",
          overflow: "hidden",
          position: "relative",
        }}
        ref={ref}
      >
        <motion.img
          src="https://burst.shopifycdn.com/photos/laptop-from-above.jpg?width=1000&format=pjpg&exif=0&iptc=0"
          className=""
          style={{
            objectFit: "cover",
            objectPosition: "center",
            scale: scaleX,
            transformOrigin: "left",
          }}
        />
      </motion.div>
      {/* service / about */}
      <div className="section-service-wrapper">
        <Services />
      </div>
      {/*  */}
      <div className="section-project-header">
        <div
          style={{
            width: "90vw",
            whiteSpace: "nowrap",
            overflow: "hidden",
            margin: "0 auto",
          }}
        >
          <motion.h1
            className="text-uppercase text-white-variant-1"
            style={{
              fontSize: "12rem",
              whiteSpace: "nowrap",
              width: "max-content",
            }}
            animate={{ transform: "translate3d(-54%,0,0)" }}
            transition={{
              ease: "linear",
              duration: 20,
              repeatType: "loop",
              repeat: Infinity,
            }}
          >
            My projects <span className="px-4" /> My project
          </motion.h1>
        </div>
      </div>
      {/*  */}
      <div className="projects-section-wrapper">
        <Projects />
      </div>
      <div className="section-milestone-wrapper">
        <MileStone />
        <LetsTalk />
      </div>
    </>
  );
};
export default Home;

const MileStone = () => {
  const milestoneList = [
    {
      count: "4",
      text: "Projects",
    },
    {
      count: "4",
      text: "Clients",
    },
    // {
    //   count: "100%",
    //   text: "Satisfaction",
    // },
    {
      count: "2+",
      text: "Year XP",
    },
  ];
  return (
    <div className="section-milestone">
      <div className="px-2 d-flex text-white-variant-2 flex-md-row flex-column justify-content-between">
        {/* left-side */}
        <div style={{ maxWidth: "650px" }}>
          <div style={{ padding: "40px 0" }}>
            <h1
              style={{
                fontSize: "3.5rem",
                lineHeight: "1",
                marginBottom: "0",
              }}
            >
              Stunning designs
            </h1>
            <h1
              className="text-color-1"
              style={{ fontSize: "3.5rem", fontWeight: "300" }}
            >
              drive results
            </h1>
          </div>
          <p className="text-white-variant-2" style={{ maxWidth: "400px" }}>
            Solutions that captivate customers, drive engagement, and achieve
            real-world results
          </p>
        </div>
        {/* right side */}
        <div
          className="d-flex gap-4 flex-wrap justify-content-center justify-content-md-start mx-auto"
          style={{ maxWidth: "350px" }}
        >
          {milestoneList &&
            milestoneList.map((item, index) => (
              <div
                key={index}
                className="col-4 mile-stone-card d-flex flex-column justify-content-center align-items-center"
              >
                <h1>{item.count}</h1>
                <p>{item.text}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
const ProjectCard = ({ title, description, skills, bgcolor, img, id }) => {
  const navigate = useNavigate();
  return (
    <div className="project-card d-flex gap-4 text-white-variant-1 flex-column flex-lg-row ">
      {/* image */}
      <div className={`col project-card-img ${bgcolor}`}>
        <img src={img} />
      </div>
      {/* right-side body */}
      <div className={`col   d-flex flex-column  project-card-body ${bgcolor}`}>
        <h1 className="mb-4 card-title ">{title}</h1>
        <p className="text-white-variant-2">{description}</p>
        <button
          className="cursor-pointer"
          onClick={() => {
            navigate(`projects/${id}`);
          }}
        >
          View Project{" "}
          <ArrowRight size={20} style={{ transform: "rotate(-45deg)" }} />{" "}
        </button>
        <div
          className="d-flex align-items-end gap-2"
          style={{ marginTop: "auto" }}
        >
          {skills &&
            skills.map((skill, index) => (
              <span
                style={{
                  alignSelf: "flex-end",
                  justifySelf: "flex-start",
                  justifyItems: "end",
                  border: "1px solid gray",
                  borderRadius: "30px",
                  padding: "5px 20px",
                }}
                key={index}
              >
                {skill}{" "}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};
const Projects = () => {
  const projectList = [
    {
      title: "Front End Devlopment",
      description:
        "Coordinated projects for timely delivery, designed intuitive dashboards, developed responsive interfaces, optimized performance, and managed deployments",
      skills: ["React.js", "Figma", "Redux"],
      bgcolor: "white",
      img: "/assets/project_11.png",
      id: "project-1",
    },
    {
      title: "Full Stack Development",
      description:
        "Implemented UI/UX best practices, optimized Postgres schemas, created interactive elements with Flutter, and designed secure API endpoints with Node.js",
      skills: ["Flutter", "Dart", "Node.js"],
      bgcolor: "purple",
      img: "/assets/project_21.png",
      id: "project-2",
    },
    {
      title: "UI Design",
      description:
        "Led UX/UI design with best practices, ensured feature delivery, and enforced coding standards.",
      skills: ["Figma", "Wire Frame"],
      bgcolor: "blue",
      img: "/assets/project_31.png",
      id: "project-3",
    },
  ];
  return (
    <div className="projects-section px-2">
      {projectList.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          skills={project.skills}
          bgcolor={project.bgcolor}
          img={project.img}
          id={project.id}
        />
      ))}
    </div>
  );
};
//lets discusses
// component
