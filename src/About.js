import React, {Component} from 'react';
import './style.css';

class About extends Component {
    render () {
        return (
            <div className="section-about">
                <div className="container">
                    <div className="text-container">
                        <div className="title-container">
                            <h2> Hi, I'm Chungeun, </h2>
                            <h3> I'm a front-end developer based in NY. </h3>
                        </div>
                        <div className="desc">
                            <p>
                                I graduated from University of Pennsylvania in December 2018. 
                                I'm skilled in HTML, CSS, JavaScript, React, Bootstrap, React-Bootstrap, Java, and MatLab.
                            </p>
                        </div>
                    </div>

                    <div className="icon-container">
                        <div className="icon-bar">
                            <a href="https://github.com/spicysos"> <i class="fab fa-github"></i> </a>
                            <a href="https://www.linkedin.com/in/chung-eun-chae-264551121/"> <i class="fab fa-linkedin"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default About;