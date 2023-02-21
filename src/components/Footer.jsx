import React from "react";
import {
    AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from "../assets/1.jpg"

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Abuzar Khan</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://web.facebook.com/profile.php?id=100012704685656" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a href="https://www.instagram.com/abuzar__khan1/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/abuzarkhan1" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
