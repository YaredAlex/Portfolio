import { motion } from "framer-motion";
import {
  Add,
  Cpu,
  Data,
  Devices,
  Diagram,
  Mobile,
  Monitor,
} from "iconsax-react";

const Services = () => {
  const iconSize = 35;
  const iconColor = "gray";
  const servicesList = [
    {
      title: "Design",
      icon: <Devices size={iconSize} color={iconColor} />,
      description: "Crafting captivating and user-friendly interfaces.",
    },
    {
      title: "Development",
      icon: <Data size={iconSize} color={iconColor} />,
      description: " Building robust and scalable software solutions.",
    },
    {
      title: "Project Managment",
      icon: <Cpu size={iconSize} color={iconColor} />,
      description: "Leading projects from inception to successful delivery.",
    },
    {
      title: "Test",
      icon: <Diagram size={iconSize} color={iconColor} />,
      description:
        "Ensuring quality and reliability through comprehensive testing.",
    },
  ];

  return (
    <motion.div className="service-section  text-white-variant-1">
      {/* why work with me do */}
      <div className="mt-100 why-me px-2">
        <div className="why-me-card-wrapper mt-4">
          <h1 className="mb-50 font-weight-400">What I DO</h1>

          <div>
            {servicesList.map((point, index) => (
              <div key={index} className="why-card font-weight-400">
                <div
                  className="why-card-title d-flex align-items-center justify-content-between cursor-pointer"
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
                  <h4 className="font-weight-400">
                    {" "}
                    <span className="me-4">{point.icon}</span>
                    {point.title}
                  </h4>

                  <Add size={iconSize} className="ms-auto d-inline-block" />
                </div>
                <div className="why-card-text">
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Services;
