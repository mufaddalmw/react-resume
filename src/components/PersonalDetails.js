import React, {Component} from 'react'
import moment from 'moment'

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
                <li><strong>Profiles:</strong></li>
            </ul>
        )
    }
}