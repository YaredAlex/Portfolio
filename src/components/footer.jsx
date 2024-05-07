import { Link } from "react-router-dom";
import "../css/footer.css";
import { navlinks } from "../repo/links";
import { Instagram } from "iconsax-react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  const [active, setActive] = "home";
  const iconSize = 25;
  const mediaList = [
    {
      title: "LinkedIn",
      icon: <FaLinkedin size={iconSize} />,
      link: "https://www.linkedin.com/in/yaredalemayehukebede",
    },
    {
      title: "Instgram",
      icon: <Instagram size={iconSize} />,
      link: "",
    },
    {
      title: "Github",
      icon: <FaGithub size={iconSize} />,
      link: "https://github.com/YaredAlex",
    },
    {
      title: "Twitter",
      icon: <FaTwitter size={iconSize} />,
      link: "https://twitter.com/yared_kebede_",
    },
  ];
  return (
    <div className="footer-container">
      <div
        className="d-flex flex-wrap justify-content-md-between 
      justify-content-around
      footer text-white-variant-1 px-2"
      >
        <h3>Yared</h3>
        <div>
          <ul className="text-white-variant-2">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Link
                  className="text-capitalize"
                  to={link.to}
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <form></form>
          {/* Midia */}
          <div className="media-wrapper">
            {mediaList.map((media, index) => (
              <Link
                key={index}
                to={media.link}
                target="_blank"
                className="media-links px-2 px-md-4 py-2 py-md-3 rounded d-flex align-items-center gap-3"
              >
                {media.icon}
                {media.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="mx-auto text-color-1 max-width-1200" />
    </div>
  );
};

export default Footer;
