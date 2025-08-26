import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            At M Jaiswal Restaurant, our team is like a family working together to give you the best experience. From talented chefs who cook with love and skill, to friendly waiters who serve with a smile, everyone has an important role. Our kitchen staff makes sure every dish is tasty and hygienic, while our management team takes care that everything runs smoothly. The delivery partners ensure your food reaches you quickly and fresh. Together, the team of M Jaiswal Restaurant works hard every day to make customers happy and feel at home.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
