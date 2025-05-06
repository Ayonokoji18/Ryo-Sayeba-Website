import React from "react";
import { Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Home() {
  return (
    <div className="homepage-parent">
      <div className="homepage-image">
        <Image src="/images/images.jpg" rounded />
      </div>

      <div className="homepage-info" data-aos="zoom-in-up">
        <h2>
          My name is Ryo Saeba , I am <b>MERN </b>
          Stack Developer and A Japanese Interpreter
        </h2>
      </div>
    </div>
  );
}

export default Home;
