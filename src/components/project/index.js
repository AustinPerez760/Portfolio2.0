import React from "react";
import "./style.css";
import brewPic from "../../assets/images/brewfinder2.jpg";
import strivePic from "../../assets/images/striveRite2.jpg";
import employeePic from "../../assets/images/employee-app.jpg";

export default function project() {
  return (
    <section className="sec1">
      <div className="main-container">
        <h3>A few past projects</h3>
        <div className="post-wrapper">
          <div>
            <div className="post">
              <img className="thumbnail" src={brewPic} alt="glass of beer" />
              <div className="post-preview">
                <h6 className="post-title">Quickly find a new Brewery</h6>
                <p className="post-intro">
                  A brewery locator app that finds a new spot to grab a drink
                  simply by plugging in your zip code using API technologies
                  along with Jquery, Ajax, CSS, HTML, and JavaScript.
                </p>
                <a href="https://austinperez760.github.io/The_BEST_Brewery_Finder/">
                  See More
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="post">
              <img
                className="thumbnail"
                src={strivePic}
                alt="children cleaning kitchen area"
              />
              <div className="post-preview">
                <h6 className="post-title">Responsibility the fun way</h6>
                <p className="post-intro">
                  StriveRite is a interactive chore responsabilty application
                  that allows parents to monitor there childrens progress in
                  completing assigned tasks using Node.js, Express, MySQL,
                  Handlebars, and Sequelize. 
                </p>
                <a href="https://striverite.net/">See More</a>
              </div>
            </div>
          </div>

          <div>
            <div className="post">
              <img
                className="thumbnail"
                src={employeePic}
                alt="cards representing employees"
              />
              <div className="post-preview">
                <h6 className="post-title">Manage Your Employess</h6>
                <p className="post-intro">
                  This employee management application blends front end and back
                  end technologies seamlessly allowing users to add company
                  positions via the command line and see them render dynamically
                  within the browser
                </p>
                <a href="https://github.com/AustinPerez760/Template-Engine">
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
