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
                    <div className="grid-y grid-padding-y text-center" style={{height: '500px'}}>
                        <div className="cell small-8 medium-8 large-10">
                            <img className="thumbnail" src={profilePic} srcSet={`${profilePic2x} 2x`} alt="Mufaddal Motorwala"/>
                        </div>
                        <div className="cell small-4 medium-4 large-2">
                            <h3>Mufaddal Motorwala</h3>
                            <p>Front-End Developer</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}