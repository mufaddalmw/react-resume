import React, { Component } from "react";
import profilePic from '../images/mufaddal.jpg'
import profilePic2x from '../images/mufaddal@2x.jpg'
import '../scss/_base.scss'
import Header from '../components/Header'




export default class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <Header isHomePage={true}/>
                <div className="grid-container">
                    <div className="grid-x">
                        <div className="cell text-center">
                            <img className="thumbnail" src={profilePic} srcSet={`${profilePic2x} 2x`} alt="Mufaddal Motorwala"/>
                        </div>
                        <div className="cell text-center">
                            <h1>Mufaddal Motorwala</h1>
                            <h3>Front-End Developer</h3>
                            
                                
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}