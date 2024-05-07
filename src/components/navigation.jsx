import { motion, useScroll } from "framer-motion";
import { Menu } from "iconsax-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navlinks } from "../repo/links";
const TopNavBar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="section-nav-wrapper">
      <div className="d-flex justify-content-between align-items-center section-nav-inner px-4">
        <h6
          className="py-2 font-weight-400"
          style={{ lineHeight: 1.3, letterSpacing: 0.4 }}
        >
          Yared <br />
          Software Engineer
        </h6>
        <div className="py-2" onClick={() => setActive(!active)}>
          {" "}
          <Menu
            color="white"
            className="d-md-none d-block position-relative mx-4"
            style={{ zIndex: 51 }}
          />
        </div>
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className={`section-nav ${
            active ? "active" : ""
          } d-flex justify-content-md-between justify-content-center`}
        >
          <ul className="link-wrapper d-flex flex-column flex-md-row justify-content-evenly align-items-center gap-2">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Link
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
        </motion.nav>
      </div>
    </div>
  );
};

export default TopNavBar;
