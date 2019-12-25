import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './style.css';


const title = ["Percussion Game", ""];
const imgSrc = ["./img/percussion-img.png", ""];
const desc = ["An app that plays percussion sounds to keyboard inputs", ""]
const imgComp = [
    (<img
        className="percussion"
        src={require("./img/percussion-img.png")}
        alt="percussion game"
    />),

]
const hrefs = ["http://htmlpreview.github.io/?https://github.com/spicysos/soundbox/blob/master/index.html", ""]
const codeHrefs = ["https://github.com/spicysos/soundbox"]

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
                    <div className="button-container">
                        <a
                            className="item-button"
                            href={hrefs[n]}
                            rel="noopener noreferrer"
                            target="_blank"
                        > View
                    </a>
                    </div>
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
                <Button id="closeBtn" variant="outline-dark" onClick={props.onHide}>X</Button>
            </Modal.Footer>
        </Modal>
    )


}
export default ModalDisplay;
