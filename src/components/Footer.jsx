import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/114859735?v=4"}
          alt="Founder"
        />

        <h2>Aditya Kaushik</h2>
        <p>Peace Out</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://github.com/AdityaKaushik2" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://github.com/AdityaKaushik2" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/AdityaKaushik2" target={"blank"}>
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
