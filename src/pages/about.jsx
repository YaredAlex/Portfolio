import { Link } from "react-router-dom";
import "../css/about.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { toolsUsed, whyPoint } from "../repo/about.jsx";
import { useRef } from "react";
import { Add, TickCircle } from "iconsax-react";

const AboutMe = () => {
  const whyref = useRef();
  const { scrollYProgress } = useScroll({
    target: whyref,
    offset: ["start end", "end start"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1.2]);
  console.log(scrollYProgress.get());
  const worksList = [
    {
      title: 4,
      subtitle: "project compelete",
    },
    {
      title: "100%",
      subtitle: "customer satisfaction",
    },
    // {
    //   title: "5",
    //   subtitle: "",
    // },
    // {
    //   title: "3",
    //   subtitle: "",
    // },
  ];

  const pointList = [
    { title: "Custom App Solutions" },
    {
      title: "UI/UX Design",
    },
    {
      title: "Data Analysis",
    },
    { title: "Scalability and Performance" },
  ];

  return (
    <div className="section-about-me max-width mx-auto mb-100">
      {/* about me */}

      <div className="about-me-first">
        <h2 style={{ maxWidth: "900px" }} className="mb-50 font-weight-400">
          Expert web and app development for your business
        </h2>
        <div className="about-me-first-inner">
          <img src="/assets/yared.jpg" alt="" />
          <div>
            {/* <h2
              style={{
                lineHeight: 1.4,
                letterSpacing: 0.8,
              }}
            >
              Experienced software engineer crafting impactful apps, helping
              diverse clients achieve their goals.
            </h2> */}
            <div className="ms-md-4 ms-0 mt-4">
              {pointList.map((point, index) => (
                <p key={index}>
                  <TickCircle /> {point.title}
                </p>
              ))}
              <span className="mt-4 d-block"></span>
              <Link to={"/contact"} className="btn-custom">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Numbers */}
      <div className="about-mile-stone mt-50 mb-100">
        {worksList.map((work, index) => (
          <div key={index} className="">
            <h1>{work.title}</h1>
            <p>{work.subtitle}</p>
          </div>
        ))}
      </div>
      {/* Quote */}
      <h1 className="about-quote pb-100 pt-50 px-2 font-weight-400">
        <span>
          “I specialize in transforming concepts into captivating digital
          experiences, blending creativity and technology to bring concepts to
          life.”
        </span>
      </h1>
      {/* language familiary with */}
      <div className="">
        <h1 className="mb-50 px-2 font-weight-400">My Experties</h1>
        <div className="about-programs-wrapper pb-100">
          <motion.div
            className="about-programs mt-50"
            initial={{}}
            animate={{
              transform: "translateX(-50%)",
            }}
            transition={{
              ease: "linear",
              duration: 40,
              repeatType: "loop",
              repeat: Infinity,
            }}
          >
            {toolsUsed.map((tool, index) => (
              <div key={index} style={{ maxWidth: "200px" }}>
                <img src={tool.img} alt="" />
              </div>
            ))}
            {toolsUsed.map((tool, index) => (
              <div key={"repeat" + index} style={{ maxWidth: "200px" }}>
                <img src={tool.img} alt="" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/*  */}
      {/* why work with me do */}
      <div className="mt-100 why-me px-2" ref={whyref}>
        <h1 className="mb-50 px-2 font-weight-400">Why Work With Me</h1>

        <div className="why-me-card-wrapper mt-4">
          <motion.div
            style={{ scaleY: scaleY, transformOrigin: "top", width: "10px" }}
            className="bg-white why-card-progress"
          >
            {/* <motion.span style={{ scaleY: scaleY }}></motion.span> */}
          </motion.div>

          <div>
            {whyPoint.map((point, index) => (
              <div key={index} className="why-card">
                <div
                  className="why-card-title d-flex justify-content-between align-items-center cursor-pointer"
                  onClick={(e) => {
                    const nextsibling = e.currentTarget.nextElementSibling;
                    let maxHeight = nextsibling.style.maxHeight;
                    if (maxHeight) {
                      nextsibling.style.maxHeight = null;
                    } else {
                      nextsibling.style.maxHeight =
                        nextsibling.scrollHeight + 10 + "px";
                    }
                  }}
                >
                  <div className="d-flex">
                    <span className="me-4">{point.icon}</span>
                    <h4
                      className="font-weight-400"
                      style={{ lineHeight: "1.5" }}
                    >
                      {point.title}
                    </h4>
                  </div>
                  <Add />
                </div>

                <div className="why-card-text">
                  {point.points.map((p, i) => (
                    <p key={"why" + i + index}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default AboutMe;
