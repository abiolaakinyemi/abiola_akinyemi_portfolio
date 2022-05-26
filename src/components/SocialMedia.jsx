import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://twitter.com/Akindan_le"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <FaFacebookF />
      </div>
    </div>
  );
};

export default SocialMedia;
