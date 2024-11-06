import React from "react";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsStackOverflow,
  BsGoogle,
  BsGithub,
  BsYoutube,
  BsBriefcase,
} from "react-icons/bs";
import "./Footer.css";

const FooterComponent = () => {
  return (
    <>
      <footer className="myFooter mt-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white">Follow Me</h3>
              <ul className="flex justify-center md:justify-start mt-4 space-x-4">
                <li>
                  <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/ahmednoureldeen/"
                    target="_blank"
                    className="text-2xl text-white hover:text-blue-500 transition duration-300 transform hover:-translate-y-1"
                  >
                    <BsLinkedin />
                  </a>
                </li>
             
              
                <li>
                  <a
                    rel="noreferrer"
                    href="https://github.com/ahmednour3123"
                    target="_blank"
                    className="text-2xl text-white hover:text-gray-500 transition duration-300 transform hover:-translate-y-1"
                  >
                    <BsGithub />
                  </a>
                </li>
                
              </ul>
            </div>
            <div className="text-center md:text-right">
              <div className="text-sm text-gray-500">
                <small>
                  © Developed and Designed by{" "}
                  <a
                    href="https://ahmednour3123.github.io/portfolio"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-amber-600 transition duration-300"
                  >
                    Ahmed Nour Eldeen
                  </a>
                  .
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
