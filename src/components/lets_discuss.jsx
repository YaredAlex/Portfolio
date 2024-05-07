import "../css/lets_discuss.css";
import "../css/button.css";
import { Link } from "react-router-dom";

const LetsTalk = () => {
  return (
    <div className="discuss-wrapper text-white-variant-1">
      <div className="discuss d-flex align-items-center justify-content-center flex-column">
        {/*design + development  */}
        <h1 className="text-uppercase text-center">
          Lets Discuss
          <br />{" "}
          <span
            className="font-weight-300 text-color-1"
            style={{
              fontWeight: "200",
            }}
          >
            Your Ideas
          </span>
        </h1>
        <p
          className="text-white-variant-2 text-center"
          style={{ maxWidth: "400px" }}
        >
          I'm great at bringing your ideas to life.
        </p>
        {/* button get in touch */}
        <Link to={"/contact"} className="btn-custom btn-hover-1 text-uppercase">
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default LetsTalk;
