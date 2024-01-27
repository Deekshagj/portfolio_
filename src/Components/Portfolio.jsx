/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "TASK MANAGER- JEST TASK",
    description:
      "The Corporate Task Manager: A robust PHP solution for seamless task management in the corporate world. Admin and user controls, advanced features, and distinct admin functionalities ensure efficiency and a user-friendly experience. Technologies used: HTML, CSS, JavaScript, Bootstrap, PHP.",
  },
  {
    title: "SMART HOME CONTROL DASHBOARD",
    description:
      "Smart Home Control Dashboard: A centralized interface for real-time monitoring and remote management of connected devices. Enhances convenience and efficiency in the smart home ecosystem. Technologies used: HTML, CSS, JavaScript.",
    url: "https://github.com/Deekshagj/Smart-Home-Dashboard",
  },
  {
    title: "MINI ARCADE",
    description:
      "Mini Arcade Python Project: A collection of classic games—dice, rock-paper-scissors, snake and ladder, coin flip, hangman, and speed testing. Developed with Python and tkinter for a visually engaging and interactive experience. Ideal for Python enthusiasts. Technologies used: Python.",
    url: "https://github.com/Deekshagj/mini-arcade-project",
  },
  {
    title: "Clone of SJBIT website registration",
    description:
      "SJBIT Registration Clone: HTML web pages project replicating the seamless registration process at SJBIT. Ideal for understanding the workflow or enhancing HTML skills. Technologies used: HTML.",
    url: "https://github.com/Deekshagj/final-html-project",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
