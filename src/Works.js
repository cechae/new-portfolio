import React, { Component } from "react";
import "./style.css";
import Modal from './Modal';
class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalNum: -1,
    }
  }

    componentDidMount = () => {
        this.filterSelection("all");
        // Add active class to the current control button (highlight it)
        let btnContainer = document.getElementById("clearfix");
        var btns = btnContainer.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) {
          this.removeClass(btns[i], "active");
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

    showModal = (num) => {
      this.setState({ modalNum: num})
    }
    setModalNum = (num) => {
      this.setState({ modalNum: num})
    }


    filterSelection = (c) => {
        let d = c;
        let x = document.getElementsByClassName("filter-div");
        if (d == "all") d = "";
        // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
        for (let i = 0; i < x.length; i++) {
          this.removeClass(x[i], "show");
          if (x[i].className.indexOf(d) > -1) {
            this.addClass(x[i], "show");
          } 
        }
        let elmt = document.getElementsByClassName("btn");
        
        for (let i = 0; i<elmt.length; i++) {
          this.removeClass(elmt[i], "active");
          if (elmt[i].className.indexOf(c) > -1) {
            this.addClass(elmt[i], "active")
          }
        }
    }
  render() {
    return (
      <div className="section-works" id="down">
          <div className="title">
              <h2>Works</h2>
          </div>
          <Modal
            show={this.state.modalNum === -1 ? false : true}
            onHide={() => this.setModalNum(-1)}
            modalNum = {this.state.modalNum}
          />
          <div className="row1">
            <div id="filters">
                <ul className="clearfix" id="clearfix">
                    <li className="all btn" onClick={() => this.filterSelection('all')}> All </li>
                    <li className="react btn" onClick={() => this.filterSelection('react')}> React </li>
                    <li className="vanilla btn" onClick={() => this.filterSelection('vanilla')}> JavaScript</li>
                    <li className="java btn" onClick={() => this.filterSelection('java')}> Java </li>
                </ul>
            </div>
          </div>
          <div className="row2">
              <div className="portfolio-overlay filter-div all vanilla percussion" onClick={() => this.showModal(0)}>
                    <i className="fas fa-drum icon shown"></i>
                    <span className="hidden">Percussion Game</span>
              </div>
              
              <div className="portfolio-overlay filter-div all react weather" onClick={() => this.showModal(1)}>
                <i className="far fa-sun-cloud icon shown"></i>
                <span className="hidden">Weather App</span>
              </div>
              <div className="portfolio-overlay filter-div all react todo"onClick={() => this.showModal(2)}>
                <i className="fas fa-clipboard-list icon shown"></i>
                <span className="hidden">To-Do App</span>
              </div>
              <div className="portfolio-overlay filter-div all react memory" onClick={() => this.showModal(3)}>
                <i className="fas fa-game-board icon shown"></i>
                <span className="hidden">Memory Game</span>
              </div>
              <div className="portfolio-overlay filter-div all vanilla color" onClick={() => this.showModal(4)}>
                <i className="fas fa-palette icon shown"></i>
                <span className="hidden">Color Game</span>
              </div>
              <div className="portfolio-overlay filter-div all java pikachu" onClick={() => this.showModal(5)}>
                <i className="far fa-alien-monster icon shown"></i>
                <span className="hidden">Pikachu Game</span>

              </div>
              <div className="portfolio-overlay filter-div all react beer" onClick={() => this.showModal(6)}>
                <i className="fas fa-beer icon shown"></i>
                <span className="hidden">Online BeerShop</span>
              </div>
          </div>
      </div>
    );
  }
}
export default Works;
