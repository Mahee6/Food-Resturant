import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              In M Jaiswal Restaurant, the first special thing is the tasty food. People love the rich flavors, whether it is spicy biryani, creamy pasta, or homely dal chawal. The second special thing is the variety. M Jaiswal Restaurant offers many options like Indian, Chinese, Italian, and sweets so everyone finds something they like.
            </p>
            <a href="/menu">
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </a>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
