import React, { Component } from "react";
import profilePic from '../images/mufaddal.jpg'
import '../scss/_base.scss'




export default class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="grid-container">
                    <div className="grid-x">
                        <div className="cell small-3">
                            <img className="thumbnail" src={profilePic} alt="Mufaddal Motorwala"/>
                        </div>
                        <div className="cell small-9">
                            <h1>Mufaddal Motorwala</h1>
                            <h3>Front-End Developer</h3>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}