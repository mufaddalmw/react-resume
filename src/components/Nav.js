import React, {Component} from 'react'
import { NavLink } from "react-router-dom";
import iconHamburger from '../images/hamburger.svg'

export default class Nav extends Component {
    state = {
        menuOpen: false
    }

    ToggleMenu = () => {
        this.setState({menuOpen: !this.state.menuOpen})
    }
    
    render(){
        return (
            <nav className={`nav-container ${this.state.menuOpen ? 'is-open' : ''}` }>
                <button className="menu-icon" onClick={this.ToggleMenu}><img src={iconHamburger} alt="Menu"/></button>
                <div className="nav-wrapper">
                    <ul className="nav">
                        <li className="nav__item" onClick={this.ToggleMenu}><NavLink to="/" activeClassName="selected" strict exact>Home</NavLink></li>
                        <li className="nav__item" onClick={this.ToggleMenu}><NavLink to="/about" activeClassName="selected">About</NavLink></li>
                        <li className="nav__item" onClick={this.ToggleMenu}><NavLink to="/skills" activeClassName="selected">Skills</NavLink></li>
                        <li className="nav__item" onClick={this.ToggleMenu}><NavLink to="/education" activeClassName="selected">Education</NavLink></li>
                        <li className="nav__item" onClick={this.ToggleMenu}><NavLink to="/experience" activeClassName="selected">Experience</NavLink></li>
                        <li className="nav__item" onClick={this.ToggleMenu}><NavLink to="/portfolio" activeClassName="selected">Portfolio</NavLink></li>
                    </ul>
                </div>
                <div className="offcanvas-overlay" onClick={this.ToggleMenu}></div>
            </nav>
        )
    }
}
