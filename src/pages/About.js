import React, { Component } from "react";

export default class About extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="grid-container">
                    <h2>About Me</h2>
                    <p>I'm a front-end ninja and developer specialized in web development, who has been developing websites for over <span id="yearOfExperience">8</span> years. Between my education in web design and my experience working alongside programmers, I specialize in bridging the gap between design and development. With HTML5, CSS and JavaScript as my tools, I build website front-ends focusing on performance, responsiveness and usability.</p>
                </div>
            </React.Fragment>
        )
    }
}