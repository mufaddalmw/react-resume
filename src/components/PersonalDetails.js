import React, {Component} from 'react'
import moment from 'moment'
import iconGithub from '../images/icon-github.png'
import iconGithub2x from '../images/icon-github@2x.png'
import iconLinkedin from '../images/icon-linkedin.png'
import iconLinkedin2x from '../images/icon-linkedin@2x.png'

export default class PersonalDetails extends Component {
    state = {
        age: 0
    }

    calculateAge = () => {
        const currentDate = new Date()
        const formattedDate = moment(currentDate).format('YYYY MM DD');
        const a = moment([formattedDate]);
        const b = moment([1986, 4, 19]);
        const diff = a.diff(b, 'years')
        this.setState({age: diff + 1 })
    }

    componentDidMount(){
        this.calculateAge()
    }

    render(){
        return(
            <ul>
                <li><strong>Born:</strong> 19 May 1986 (age {this.state.age} years)</li>
                <li><strong>Nationality:</strong> Indian</li>
                <li><strong>Languages:</strong> English (Professional), Hindi (Native), Arabic (Basic) </li>
                <li><strong>Marital Status:</strong> Married</li>
                <li><strong>Current Residence:</strong> Dubai, UAE</li>
                <li><strong>Mobile:</strong> <a href="tel:+971 52 919 8753">+971 52 919 8753</a></li>
                <li><strong>Email:</strong> <a href="mailto:mufaddal.motorwala@gmail.com">mufaddal.motorwala@gmail.com</a></li>
                <li><strong>Profiles:</strong>
                    <a href="https://github.com/mufaddalmw" target="_blank" rel="noopener noreferrer"><img src={iconGithub} srcSet={`${iconGithub2x} 2x`} alt="Github"/></a>
                    <a href="https://www.linkedin.com/in/mufaddalmw/" target="_blank" rel="noopener noreferrer"><img src={iconLinkedin} srcSet={`${iconLinkedin2x} 2x`} alt="Linkedin"/></a>
                </li>
            </ul>
        )
    }
}