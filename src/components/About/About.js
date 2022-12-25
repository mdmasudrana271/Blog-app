import React from "react";
import Lottie from "lottie-react";
import { FaGithub, FaLinkedin,FaWhatsappSquare } from "react-icons/fa";
import animation from "../../Hi.json";

const About = () => {
  return (
    <section className="mb-10">
      <div className="md:flex items-center justify-between mx-10">
        <div className="md:w-1/2">
          <figure className="md:w-full">
            <Lottie loop={true} animationData={animation}></Lottie>
          </figure>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-3xl  font-bold mt-10">About Me</h3>
          <div className="divider"></div>
          <h1 className="text-xl font-bold mb-2">
            Hey, I'm Md Abdullah Al Masud
          </h1>
          <p className="text-xl">
            I'm a front-end developer near Sirajganj,Bangladesh.Coding has
            become a perfect union of my two favourite passions and I love
            seeing the results of my efforts helping the user's experience I'm
            finding unique solutions to complex problems and i'm working with
            Figma, HTML5, CSS3, JavaScript, React, Bootstrap, Tailwind CSS,
            NodeJs, ExpressJs.
          </p>
          <h3 className="text-3xl  font-bold mt-10">Education</h3>
          <div className="divider"></div>
          <div className="text-xl">
            <p>
              Bachelor of Commerce (B.Com) (Hons.), Accounting, 1st Year.
              
            </p>
            <p>Islamia Govt College sirajganj</p>
            <p>Session: 2022-2023</p>
          </div>
          <h3 className="text-3xl  font-bold mt-10">Contact</h3>
          <div className="divider"></div>
          <div className="text-xl">
            <div className="flex items-center gap-2">
              <FaWhatsappSquare></FaWhatsappSquare>
            <p>Whatsapp: +8801797888303</p>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin></FaLinkedin>
              <a href="https://www.linkedin.com/in/md-abdullahalmasud/">
                LinedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaGithub></FaGithub>
              <a href="https://github.com/mdmasudrana271"> Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
