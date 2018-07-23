import React, { Component } from "react";
import Swiper from 'swiper'
import img_rbbi from '../images/portfolio-rbbi.jpg'
import img_adib from '../images/portfolio-adib.jpg'
import img_ccad from '../images/portfolio-ccad.jpg'
import img_famous_birthdays from '../images/portfolio-famous-birthdays.jpg'
import img_dubaiholding from '../images/portfolio-dubaiholding.jpg'
import img_gmis from '../images/portfolio-gmis.jpg'

export default class Portfolio extends Component {
    initSwiper = () => {
        new Swiper ('.swiper-container', {
            slidesPerView: 2,
        })
    }

    componentDidUpdate(){
        this.initSwiper()
    }

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
                                        <img src={img_ccad} alt="Cleveland Clinic Abu Dhabi" />
                                        <figcaption>Cleveland Clinic Abu Dhabi</figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="https://www.famousbirthdays.com/" target="_blank" rel="noopener noreferrer">
                                    <figure>
                                        <img src={img_famous_birthdays} alt="Famous Birthdays" />
                                        <figcaption>Famous Birthdays</figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="https://dubaiholding.com/en/" target="_blank" rel="noopener noreferrer">
                                    <figure>
                                        <img src={img_dubaiholding} alt="Dubai Holding" />
                                        <figcaption>Dubai Holding</figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div className="swiper-slide">
                                <a href="https://gmisummit.com/" target="_blank" rel="noopener noreferrer">
                                    <figure>
                                        <img src={img_gmis} alt="Global Manufacturing &amp; Industrialisation Summit" />
                                        <figcaption>Global Manufacturing &amp; Industrialisation Summit</figcaption>
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}