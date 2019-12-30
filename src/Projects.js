import React, { Component } from "react";
import "./style.css";

class Projects extends Component {
  render() {
    return (
      <div className="section-projects">
        <h1> Works </h1>
        <div className="gallery-container">
          <div className="item box-shadow">
            <h5> Percussion Game </h5>
            <img
              className=""
              src={require("./img/percussion-img.png")}
              alt="percussion game"
            />
            <p>
              {" "}
              An app that plays percussion sounds to keyboard inputs.{" "}
            </p>

            <div className="button-container">
              <a
                className="item-button box-shadow"
                href="http://htmlpreview.github.io/?https://github.com/spicysos/soundbox/blob/master/index.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                View{" "}
              </a>

              <a
                className="item-button box-shadow"
                href="https://github.com/spicysos/soundbox"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Source code
              </a>
            </div>
          </div>
          
          <div className="item box-shadow">
            <h5> To-Do App </h5>
            <img
              className=""
              src={require("./img/todo.png")}
              alt="Todo-App"
            />
            <p> A To-Do app that stores your to-do in MongoDB using Stitch.{" "}</p>
            <div className="button-container">
              <a
                className="item-button box-shadow"
                href="https://todo-stitch.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >View</a>
              <a
                className="item-button box-shadow"
                href="https://github.com/spicysos/project-stitch"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>


          <div className="item box-shadow">
            <h5> Weather App </h5>
            <img
              className=""
              src={require("./img/weather2.png")}
              alt="weather app"
            />
            <p class="card-text">
              {" "}
              A weather app that retrieves live weather data built with React{" "}
            </p>

            <div className="button-container">
              <a
                className="item-button box-shadow"
                href="https://weather-app0.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                View{" "}
              </a>

              <a
                className="item-button box-shadow"
                href="https://github.com/spicysos/weather"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                Source Code{" "}
              </a>
            </div>
          </div>

          <div className="item box-shadow">
            <h5> Matching Card Memory Game </h5>
            <img
              className="memory-game"
              src={require("./img/matching-game.png")}
              alt="matching game"
            />
            <p class="card-text">
              {" "}
              A game where a player needs to turn over a pair of matching cards {" "}
            </p>

            <div className="button-container">
            <a
                className="item-button box-shadow"
                href="https://matching0game.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                View{" "}
              </a>
              <a
                className="item-button box-shadow"
                href="https://github.com/spicysos/matching-game"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                Source code{" "}
              </a>
            </div>
          </div>

          <div className="item box-shadow">
            <h5> Color Game App </h5>
            <img
              id="colorgame"
              src={require("./img/colorgame.png")}
              alt="color game"
            />
            <p>
              {" "}
              A color game app where the player guesses the right color, given
              rgb values. {" "}
            </p>

            <div className="button-container">
              <a
                className="item-button box-shadow"
                href="http://htmlpreview.github.io/?https://github.com/spicysos/colorgame/blob/master/color.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                View {" "}
              </a>

              <a
                className="item-button box-shadow"
                href="https://github.com/spicysos/colorgame"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Source Code{" "}
              </a>
            </div>
          </div>

          <div className="item box-shadow">
            <h5> Java Game </h5>
            <img
              id="javagame"
              src={require("./img/javagame.png")}
              alt="java game"
            />
            <p class="card-text">
              {" "}
              An interactive game that receives keyboard inputs. {" "}
            </p>

            <div className="button-container">
              <a
                className="item-button box-shadow"
                  href="https://github.com/spicysos/JavaGame"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  Source Code{" "}
                </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
