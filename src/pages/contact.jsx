import { Call, Sms } from "iconsax-react";
import "../css/contact.css";
const Contact = () => {
  return (
    <>
      <div className="text-white-variant-1 contact-section">
        <div className="contact-wrapper px-2">
          <h4>Contact</h4>
          <h1 className="mb-50">Get in Touch</h1>
          <div className="d-flex gap-4 align-items-center flex-md-row flex-column">
            <div
              className="col rounded "
              style={{ width: "100%", height: "100%", overflow: "hidden" }}
            >
              <div className="custom-card contact mb-4 d-flex">
                <span className="icon-wrapper blue">
                  {" "}
                  <Call size={35} />
                </span>
                <span>
                  <h4>Phone</h4>
                  <p className="text-white-variant-2">+917508024953</p>
                </span>
              </div>
              <div className="custom-card contact d-flex">
                <span className="icon-wrapper purple">
                  <Sms size={35} />
                </span>
                <span>
                  <h4>Email</h4>
                  <p className="text-white-variant-2">yareda25@gmail.com</p>
                </span>
              </div>
            </div>
            <form className="col contact-form p-2">
              <div>
                <label htmlFor="" className="contact-label">
                  Name
                </label>
                <input placeholder="Name" />
              </div>

              <div>
                <label htmlFor="" className="contact-label">
                  Email
                </label>
                <input placeholder="Email" />
              </div>
              <div>
                <label htmlFor="" className="contact-label">
                  Your message
                </label>
                <textarea rows={6} placeholder="Your text" />
              </div>
              <button className="btn-custom">submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
