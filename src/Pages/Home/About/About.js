import React from "react";
import "./About.css";
import sajib from "../../../images/sajib.jpeg";

const About = () => {
  return (
    <div>
      <div className="profile">
        <img className="img-style" src={sajib} alt="" />
        <div className="information">
          <h3>Md. Sajidul islam Sajib</h3>
          <h5>Qualification: BSC in CSE</h5>
          <h5>Address: Mirpur,Dhaka</h5>
        </div>
      </div>
      <div className="goal">
        <p>
          My Goal: I have a dream to job in software engineering in famous
          software farm in country or outside the country.Now I am in final year
          in computer science and engineering.Finishing the bechelor I want to
          higher study.So if I have no experience in computer science field it
          was very difficult to servive in outside country.So for this reason I
          am starting quickly to learn something.Though I have no enough
          knowledge about computer but recently I have acquire enough knowledge
          about computer and I hope in this year I will gain enough knowledge by
          programming hero and reach my goal successfully inshallah
        </p>
      </div>
    </div>
  );
};

export default About;
