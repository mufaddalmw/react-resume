import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './index.scss';
import Home from './pages/Landing'
import About from './pages/About'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Portfolio from './pages/Portfolio'



const PageContent = () => {
    return (
        <Router>
            <React.Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/skills" component={Skills} />
                <Route path="/education" component={Education} />
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