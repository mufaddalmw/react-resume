import React, { Component } from "react";
import img_rbbi from '../images/portfolio-rbbi.png'
import img_adib from '../images/portfolio-adib.png'

export default class Portfolio extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="grid-container">
                    <h1>Portfolio</h1>
                    <ul>
                        <li>
                            <a href="http://rbbideas.com/" target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <img src={img_rbbi} alt="RBBideas"/>
                                    <figcaption>RBBideas</figcaption>
                                </figure>
                            </a>
                        </li>
                        <li>
                            <a href="http://adib.ae/" target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <img src={img_adib} alt="Abu Dhabi Islamic Bank" />
                                    <figcaption>Abu Dhabi Islamic Bank</figcaption>
                                </figure>
                            </a></li>
                        <li>Cleveland Clinic Abu Dhabi</li>
                        <li>Famous Birthdays</li>
                        <li>Dubai Holding</li>
                        <li>Global Manufacturing &amp; Industrialisation Summit</li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}