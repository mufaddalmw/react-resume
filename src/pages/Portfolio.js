import React, { Component } from "react";
import Swiper from '../../node_modules/swiper/dist/js/swiper'
import img_rbbi from '../images/portfolio-rbbi.jpg'
import img_adib from '../images/portfolio-adib.jpg'
import img_ccad from '../images/portfolio-ccad.jpg'
import img_famous_birthdays from '../images/portfolio-famous-birthdays.jpg'
import img_dubaiholding from '../images/portfolio-dubaiholding.jpg'
import img_gmis from '../images/portfolio-gmis.jpg'
import Header from '../components/Header'

export default class Portfolio extends Component {
    state = {
        portfolio : [
            {
                title: 'RBBideas',
                image: img_rbbi,
                url: 'http://rbbideas.com'
            },
            {
                title: 'Global Manufacturing & Industrialisation Summit',
                image: img_gmis,
                url: 'https://gmisummit.com'
            },
            {
                title: 'Dubai Holding',
                image: img_dubaiholding,
                url: 'https://dubaiholding.com/en'
            },
            {
                title: 'Cleveland Clinic Abu Dhabi',
                image: img_ccad,
                url: 'https://www.clevelandclinicabudhabi.ae/en/pages/default.aspx'
            },
            {
                title: 'Famous Birthdays',
                image: img_famous_birthdays,
                url: 'https://www.famousbirthdays.com'
            },
            {
                title: 'Abu Dhabi Islamic Bank',
                image: img_adib,
                url: 'http://adib.ae'
            },
        ]
    }

    initSwiper = () => {
        new Swiper ('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                }
            }
            
        })
    }

    componentDidMount(){
        this.initSwiper()
    }

    render(){
        return(
            <React.Fragment>
                <Header isHomePage={false}/>
                <div className="grid-container">
                    <h1>Portfolio</h1>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.portfolio.map((item, index) => {
                                    return (
                                        <div className="swiper-slide" key={index}>
                                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                <figure>
                                                    <img src={item.image} alt={item.title} />
                                                    <figcaption>
                                                        <h2>{item.title}</h2> 
                                                        <span className="button large">View Site</span>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}