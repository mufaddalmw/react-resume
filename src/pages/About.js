import React, { Component } from "react";

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

                    <h3>Education</h3>
                    <p>
                        <strong>Diploma in Web Designing and Development</strong><br/>
                        Virtual Voyage College of Multimedia<br/>
                        2008 - 2009<br/>
                        Indore, India
                    </p>

                    <p>
                        <strong>Graduation - Bachelor of Commerce</strong><br/>
                        Devi Ahilya Vishwavidyalaya<br/>
                        2004 - 2007<br/>
                        Indore, India
                    </p>

                    
                </div>
            </React.Fragment>
        )
    }
}