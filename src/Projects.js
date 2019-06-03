import React, { Component } from "react";
import "./style.css";

class Projects extends Component {
  render() {
    return (
      <div className="section-projects">
        <h1> Projects </h1>

        <div className="gallery-container">
          <div className="item box-shadow">
            <h5> Percussion Game </h5>
            <img
              className=""
              src={require("./percussion-img.png")}
              alt="percussion game"
            />
            <p>
              {" "}
              A game app that plays percussion sounds to keyboard inputs built
              with HTML, CSS and JavaScript{" "}
            </p>

            <div className="button-container">
              <a
                className="item-button box-shadow"
                href="http://htmlpreview.github.io/?https://github.com/spicysos/soundbox/blob/master/index.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                Preview This Project{" "}
              </a>

              <a
                className="item-button box-shadow"
                href="https://github.com/spicysos/soundbox"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                View Detail
              </a>
            </div>
          </div>

          <div className="item box-shadow">
            <h5> Weather App </h5>
            <img
              className=""
              src={require("./weather.png")}
              alt="weather app"
            />
            <p class="card-text">
              {" "}
              A weather app that retrieves live weather data built with React{" "}
            </p>

            <div className="button-container">
              <a
                className="item-button box-shadow"
                href="https://github.com/spicysos/weather"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                View Detail{" "}
              </a>
            </div>
          </div>

          <div className="item box-shadow">
            <h5> Color Game App </h5>
            <img
              id="colorgame"
              src={require("./colorgame.png")}
              alt="color game"
            />
            <p>
              {" "}
              A color game app where the player guesses the right color, given
              rgb values, built with HTML, CSS and JavaScript{" "}
            </p>

            <div className="button-container">
              <a
                className="item-button box-shadow"
                href="http://htmlpreview.github.io/?https://github.com/spicysos/colorgame/blob/master/color.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                Preview This Project{" "}
              </a>

              <a
                className="item-button box-shadow"
                href="https://github.com/spicysos/colorgame"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                View Detail{" "}
              </a>
            </div>
          </div>

          <div className="item box-shadow">
            <h5> Java Game </h5>
            <img
              id="javagame"
              src={require("./javagame.png")}
              alt="java game"
            />
            <p class="card-text">
              {" "}
              An interactive game that receives keyboard inputs, built with Java
              and Swing library.{" "}
            </p>

            <div className="button-container">
              <a
                className="item-button box-shadow"
                  href="https://github.com/spicysos/JavaGame"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  View Detail{" "}
                </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
