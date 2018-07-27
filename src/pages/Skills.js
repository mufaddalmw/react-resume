import React, { Component } from "react";

export default class Skills extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="grid-container">
                    <h1>Skills</h1>
                    <ul>
                        <li>HTML5/CSS3</li>
                        <li>SCSS, Stylus, BEM, Styled Components</li>
                        <li>JavaScript, React, jQuery</li>
                        <li>Foundation, Bootstrap</li>
                        <li>Pug.js (Templating)</li>
                        <li>Wordpress</li>
                        <li>Webpack</li>
                        <li>Git</li>
                    </ul>

                    <h3>Education</h3>
                    <p>
                        <strong>Diploma in Web Designing and Development</strong><br/>
                        Virtual Voyage College of Multimedia<br/>
                        2008 - 2009<br/>
                        Indore, India
                    </p>

                    <p>
                        <strong>Graduation - Bachelor of Commerce</strong><br/>
                        Devi Ahilya Vishwavidyalaya<br/>
                        2004 - 2007<br/>
                        Indore, India
                    </p>
                </div>
            </React.Fragment>
        )
    }
}