import React from 'react';
import Nav from './Nav'
import logo from '../images/mufaddal-sm.jpg'
import logo2x from '../images/mufaddal-sm@2x.jpg'

const Header = (props) => {
    const isHomePage = props.isHomePage
    return(
        <header className="mainheader grid-container">
            <div className="grid-x grid-margin-x">
                {
                    !isHomePage ? (
                        <React.Fragment>
                            <div className="cell small-3"><img src={logo} srcSet={`${logo2x} 2x`} alt="Mufaddal" className="logo"/></div>
                            <div className="cell small-9">
                                <strong>Mufaddal Motorwala</strong><br/>
                                <small>Front-End Developer</small>
                            </div>
                        </React.Fragment>
                    ) : null
                }
                
            </div>
            <Nav/>
        </header>
    )
}

export default Header