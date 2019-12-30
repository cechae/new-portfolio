import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './style.css';


const title = ["Percussion Game", "Weather App", "To-Do App", "Memory Game", "Color Game", 'Pikachu Game', "Onlne BeerShop"];
const desc = ["An app that plays percussion sounds to keyboard inputs", 
"A weather app that retrieves live weather data built with React", "A To-Do app that stores your to-do in MongoDB using Stitch, with GoogleOAuth to save your To-do list for future sessions.", "A game where a player needs to turn over a pair of matching cards",
"A color game app where the player guesses the right color, given rgb values.",
"An interactive game that receives keyboard inputs written in Java.",
"An online beer shop that utilizes PunkAPI to display a list of beers, with a search function."
]
const imgComp = [
    (<img
        src={require("./img/percussion-img.png")}
        alt="percussion game"
    />),
    
    (<img
        src={require("./img/weather2.png")}
        alt="weather app"
    />),
    (<img
        src={require("./img/todo.png")}
        alt="Todo-App"
      />),
    (<img
        src={require("./img/matching-game.png")}
        alt="memory game"
    />),
    (<img
        src={require("./img/colorgame.png")}
        alt="color game"
    />),
    (<img
        src={require("./img/javagame.png")}
        alt="java game"
    />),
    (<img
        src={require("./img/beershop.jpeg")}
        alt="beerShop"
    />),
    

]
const hrefs = ["http://htmlpreview.github.io/?https://github.com/spicysos/soundbox/blob/master/index.html", 
"https://weather-app0.herokuapp.com/", "https://todo-stitch.herokuapp.com/", 
"https://matching0game.herokuapp.com/", "http://htmlpreview.github.io/?https://github.com/spicysos/colorgame/blob/master/color.html",
"", "https://the-beer-shop1.herokuapp.com/"]

const codeHrefs = ["https://github.com/spicysos/soundbox","https://github.com/spicysos/weather",
 "https://github.com/spicysos/project-stitch", "https://github.com/spicysos/matching-game",
"https://github.com/spicysos/colorgame", "https://github.com/spicysos/JavaGame",
"https://github.com/spicysos/Beer"]


const ModalDisplay = (props) => {
    console.log(props)
    let n = props.modalNum;
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='project-modal'
        >
            <Modal.Body className="modalBody">
                <h3 className="appTitle">{title[n]}</h3>
                <p>
                {desc[n]}
                </p>
                <div id="modal-img-container">
                    {imgComp[n]}
                </div>
                <div className="btn-box">
                    {hrefs[n]!=="" && <div className="button-container">
                        <a
                            className="item-button"
                            href={hrefs[n]}
                            rel="noopener noreferrer"
                            target="_blank"
                        > View
                    </a>
                    </div>}   
                    <div className="button-container">
                        <a
                            className="item-button src-link"
                            href={codeHrefs[n]}
                            rel="noopener noreferrer"
                            target="_blank"
                        > Source&nbsp;Code
                        </a>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button id="closeBtn" variant="dark" onClick={props.onHide}>X</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalDisplay;
