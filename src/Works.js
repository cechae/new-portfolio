import React, { Component } from "react";
import "./style.css";

class Works extends Component {

    componentDidMount = () => {
        this.filterSelection("all");
        // Add active class to the current control button (highlight it)
        let btnContainer = document.getElementById("clearfix");
        var btns = btnContainer.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
        }

    }
    // Hide elements that are not selected
    removeClass = (element, name) => {
        let i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
        }
        element.className = arr1.join(" ");
    }
    addClass = (element, name) => {
        let i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
          if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
          }
        }
      }


    filterSelection = (c) => {
        let x, i;
        x = document.getElementsByClassName("filter-div");
        if (c == "all") c = "";
        // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
        for (i = 0; i < x.length; i++) {
          this.removeClass(x[i], "show");
          if (x[i].className.indexOf(c) > -1) {
            this.addClass(x[i], "show");
          } 
        }


        // switch (type) {
        //     case 'all':
        //         console.log("all selected")
        //         break;
        //     default:
        //         console.log("something else")
        //         break;
        // }
    }
  render() {
    return (
      <div className="section-works">
          <div className="title">
              <h2>Works</h2>
          </div>
          <div className="row1">
            <div id="filters">
                <ul className="clearfix" id="clearfix">
                    <li className="all btn" onClick={() => this.filterSelection('all')}> All </li>
                    <li className="react btn" onClick={() => this.filterSelection('react')}> React </li>
                    <li className="vanilla btn" onClick={() => this.filterSelection('vanilla')}> Vanilla JS</li>
                    <li className="java btn" onClick={() => this.filterSelection('java')}> Java </li>
                </ul>
            </div>
          </div>
          <div className="row2">
              <div id="portfolio-wrap">
                  <div className="container-box">
                      <div className="portfolio-overlay filter-div all react percussion">
                          {/* <div><p>Percussion Game</p></div> */}
                          <i className="fas fa-drum icon"></i>
                      </div>
                      
                      <div className="portfolio-overlay filter-div all react weather">
                        {/* <div><p>Weather App</p></div> */}
                        <i className="far fa-sun-cloud icon"></i>
                      </div>
                      <div className="portfolio-overlay filter-div all react todo">
                        {/* <div><p>To-Do App</p></div> */}
                        <i className="fas fa-clipboard-list icon"></i>
                      </div>
                      <div className="portfolio-overlay filter-div all react memory">
                        {/* <div><p>Memory Game </p></div> */}
                        <i className="fas fa-game-board icon"></i>
                      </div>
                      <div className="portfolio-overlay filter-div all vanilla color">
                        {/* <div><p>Color Game </p></div> */}
                        <i className="fas fa-palette icon"></i>
                      </div>
                      <div className="portfolio-overlay filter-div all java pikachu">
                        {/* <div><p>Java Pikachu Game </p></div> */}
                        <i className="far fa-alien-monster icon"></i>

                      </div>
                      <div className="portfolio-overlay filter-div all react beer">
                        {/* <div><p>Online BeerShop</p></div> */}
                        <i className="fas fa-beer icon"></i>
                      </div>

                  </div>
              </div>

          </div>
        
      </div>
    );
  }
}
export default Works;
