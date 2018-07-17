import React, { Component } from "react";

export default class Skills extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="grid-container">
                    <h1>Skills</h1>
                    <ul>
                        <li>HTML5/CSS3</li>
                        <li>SCSS, Stylus, BEM</li>
                        <li>JavaScript, React, jQuery</li>
                        <li>Foundation, Bootstrap</li>
                        <li>Pug.js (Templating)</li>
                        <li>Wordpress</li>
                        <li>Webpack</li>
                        <li>Git</li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}