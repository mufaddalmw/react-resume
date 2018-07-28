import React, { Component } from "react";
import Header from '../components/Header'

export default class Skills extends Component {
    render(){
        return(
            <React.Fragment>
                <Header isHomePage={false}/>
                <div className="grid-container">
                    <h1>Education</h1>
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