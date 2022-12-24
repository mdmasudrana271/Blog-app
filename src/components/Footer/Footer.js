import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaFacebook,FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="text-gray-200">
          <Link to='/home'>Home</Link>
          <Link to='/posts'>Posts</Link>
          <Link to='/about'>About</Link>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/mdmasud83732961" className="text-2xl">
              <FaTwitter></FaTwitter>
            </a>
            <a href="https://www.facebook.com/mdabdullamasud.rana/" className="text-2xl">
              <FaFacebook></FaFacebook>
            </a>
            <a href="https://github.com/mdmasudrana271" className="text-2xl">
              <FaGithub></FaGithub>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
