import React, {Component} from 'react';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';


class About extends Component {
    render () {
        return (

            <div className="section-about">
                <div className='bg-img'></div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand href="#home">Chungeun Chae</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">ABOUT</Nav.Link>
                            <Nav.Link eventKey={2} href="#work">
                                WORKS
                            </Nav.Link>
                            <Nav.Link href="#features">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container" id="main">
                    <div className="text-container bg-text">
                        <div className="title-container">
                            <h2> Hello, my name is Chungeun, I'm a Front-end web developer based in NY. </h2>
                            {/* <h3> CREATIVE AND PASSIONATE </h3> */}
                            <div className="outer-carousel-container">
                                <Carousel className='carousel-container'>
                                    <Carousel.Item>
                                    <h3> CREATIVE AND PASSIONATE </h3>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                    <h3> SIMPLE AND RESPONSIVE WEBSITES </h3>
                                    </Carousel.Item>
                                </Carousel>
                            </div>


                        </div>
                        <div className="desc">
                            {/* <p>
                                I graduated from the University of Pennsylvania in December 2018. 
                                I'm skilled in HTML, CSS, JavaScript, React, Bootstrap, React-Bootstrap, Java, and MatLab.
                            </p> */}
                        </div>
                    </div>

                    
                </div>
            </div>
        );
    }
}
export default About;