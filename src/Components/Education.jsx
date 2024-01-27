import React from "react";

import image from "../images/education.jpg";

const imageAltText =" "

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
        </div>
        <img className="background" src={image} alt="" />
        <div style={{ maxWidth: "60%", paddingLeft: "2rem" }}>
          <h3 style={{ margin: 0 }}>BE in Computer Science</h3>
          <p style={{ margin: 0 }}>SJBIT, Bangalore</p>
          <p style={{ margin: 0 }}>2021 - 2025</p>
          <p style={{ margin: 0 }}>CGPA: 9.0</p>
          <p style={{ margin: 0 }}>Activities and Societies: MLSA, GDSC, STIC </p>
        </div>
      </div>
    </section>
  );
};

export default Education;