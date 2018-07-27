import React, { Component } from "react";
import PersonalDetails from '../components/PersonalDetails'

export default class About extends Component {
    state = {
        year: null
    }

    countYears = () =>{
        const dt = new Date()
        const currentYear = dt.getFullYear()
        this.setState({
            year: currentYear - 2010
        })
    }

    componentDidMount(){
        this.countYears()
    }

    render(){
        return(
            <React.Fragment>
                <div className="grid-container">
                    
                    <h1>About Me</h1>
                    <p>I'm a front-end ninja and developer specialized in web development, who has been developing websites for over {this.state.year} years. Between my education in web design and my experience working alongside programmers, I specialize in bridging the gap between design and development. With HTML, CSS and JavaScript as my tools, I build website front-ends focusing on performance, responsiveness and usability.</p>
                    <PersonalDetails/>
                    

                    
                </div>
            </React.Fragment>
        )
    }
}