import React, { Component } from "react";
import profilePic from './mufaddal.jpg'
import '../scss/_base.scss'


export default class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="column small-3 w3-margin-top">
                    <img className="thumbnail" src={profilePic} alt="Mufaddal Motorwala"/>
                </div>
                <div className="column small-9 w3-margin-top">
                    <h1>Mufaddal Motorwala</h1>
                    <h3>Front-end Developer</h3>
                </div>
            </React.Fragment>
        )
    }
}