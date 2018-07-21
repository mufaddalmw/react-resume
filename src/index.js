import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './index.scss';
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Portfolio from './pages/Portfolio'


const PageContent = () => {
    return (
        <Router>
            <React.Fragment>
                <ul>
                    <li><NavLink to="/" activeClassName="selected" strict exact>Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
                    <li><NavLink to="/skills" activeClassName="selected">Skills</NavLink></li>
                    <li><NavLink to="/experience" activeClassName="selected">Experience</NavLink></li>
                    <li><NavLink to="/portfolio" activeClassName="selected">Portfolio</NavLink></li>
                </ul>

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/skills" component={Skills} />
                <Route path="/experience" component={Experience} />
                <Route path="/portfolio" component={Portfolio} />

            </React.Fragment>
        </Router>
    )
}

ReactDOM.render(
    <PageContent/>,
    document.getElementById('root')
)