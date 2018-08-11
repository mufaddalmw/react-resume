import React, { Component } from "react";
import Header from '../components/Header'

export default class Skills extends Component {
    render(){
        return(
            <React.Fragment>
                <Header isHomePage={false}/>
                <div className="grid-container">
                    <h1>Skills</h1>
                    <ul>
                        <li>HTML5/CSS3</li>
                        <li>SCSS, Stylus, BEM, Styled Components</li>
                        <li>JavaScript, React.js, jQuery</li>
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