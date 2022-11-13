import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div>
      <div className="w-full contact-container py-10">
        <h1 className="text-center text-xl md:text-2xl font-semibold text-primary">
          Contact Us
        </h1>
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
          Stay connected with us
        </h2>
        <div className="">
          <div className="w-4/5 md:w-1/3 mx-auto">
            <div className=" w-full">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input input-bordered rounded-none"
                />
              </div>
              <div className="form-control mt-4">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered rounded-none"
                />
              </div>
              <div className="form-control mt-4">
                <textarea
                  className="textarea rounded-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="form-control mt-6 w-1/2 mx-auto rounded-none">
                <PrimaryButton>Submit</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
