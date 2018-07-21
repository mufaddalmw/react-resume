import React, { Component } from "react";
import img_rbbi from '../images/portfolio-rbbi.jpg'
import img_adib from '../images/portfolio-adib.png'

export default class Portfolio extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="grid-container">
                    <h1>Portfolio</h1>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <a href="http://rbbideas.com/" target="_blank" rel="noopener noreferrer">
                                    <figure>
                                        <img src={img_rbbi} alt="RBBideas" />
                                        <figcaption>RBBideas</figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="http://adib.ae/" target="_blank" rel="noopener noreferrer">
                                    <figure>
                                        <img src={img_adib} alt="Abu Dhabi Islamic Bank" />
                                        <figcaption>Abu Dhabi Islamic Bank</figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="https://www.clevelandclinicabudhabi.ae/en/pages/default.aspx" target="_blank" rel="noopener noreferrer">
                                    <figure>
                                        <img src={img_rbbi} alt="Cleveland Clinic Abu Dhabi" />
                                        <figcaption>Cleveland Clinic Abu Dhabi</figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="https://www.famousbirthdays.com/" target="_blank" rel="noopener noreferrer">
                                    <figure>
                                        <img src={img_adib} alt="Famous Birthdays" />
                                        <figcaption>Famous Birthdays</figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div className="swiper-slide">Slide 3</div>
                            <div className="swiper-slide">Slide 3</div>
                        </div>
                    </div>
                    <ul>
                        <li>
                            
                        </li>
                        <li>Dubai Holding</li>
                        <li>Global Manufacturing &amp; Industrialisation Summit</li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}