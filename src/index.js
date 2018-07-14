import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import './index.scss';
import Home from './pages/Home'
import About from './pages/About'


const PageContent = () => {
    return (
        <Router>
            <React.Fragment>
                <ul>
                    <li><NavLink to="/" activeClassName="selected" strict exact>Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
                </ul>
                
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            
            </React.Fragment>
        </Router>
    )
}

ReactDOM.render(
    <PageContent/>,
    document.getElementById('root')
)