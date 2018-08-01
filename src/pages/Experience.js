import React, { Component } from "react"
import moment from 'moment'
import Header from '../components/Header'

export default class Experience extends Component {
    state = {
        rbbi : {
            startDate: new Date(2014, 0, 1),
            endDate: new Date()
        },
        vinfotech : {
            startDate: new Date(2010, 10, 1),
            endDate: new Date(2013, 11, 31)
        },
        kalptaru: {
            startDate: new Date(2009, 11, 1),
            endDate: new Date(2010, 9, 30)
        },
        naidunia: {
            startDate: new Date(2008, 5, 1),
            endDate: new Date(2009, 11, 31)
        }
    }

    yearsMonths = (start, end) => {
        const a = moment(start);
        const b = moment(end);
        const rawyears = b.diff(a, 'years')
        const rawmonths = b.diff(a, 'months')
        let years = '', months = ''

        // if rawyears are greater than 0
        years = rawyears > 0 ? `${rawyears} yrs ` : ''

        // if rawmonths are greater than 0
        months = rawmonths > 0 ? `${rawmonths - rawyears * 12} mos` : ''

        return `${years}${months}`
    }

    componentDidMount(){
        this.yearsMonths(this.state.rbbi.startDate, this.state.rbbi.endDate)
    }

    render(){
        return(
            <React.Fragment>
                <Header isHomePage={false}/>
                <div className="grid-container">
                    <h1>Experience</h1>
                    <h4>Front-End Developer <a href="https://www.linkedin.com/company/red-blue-blur-ideas-rbbi-" target="_blank" rel="noopener noreferrer">@RBBideas</a></h4>
                    <p>{moment(this.state.rbbi.startDate).format("MMM YYYY")} - Present ({this.yearsMonths(this.state.rbbi.startDate, this.state.rbbi.endDate)})<br/>
                        Dubai, UAE</p>
                    <ul>
                        <li>Created responsive cross browser  front-end solutions according to wireframes and designs.</li>
                        <li>Collaborating with team members to define and improve internal front-end web development strategy, practices, standards and guidelines.</li>
                        <li>Proficiency in frameworks such as Foundation, Bootstrap.</li>
                        <li>Utilizing HTML5 (templating using pug, handlebar), SCSS, JavaScript (ECMAScript 6), WordPress in daily workflow.</li>
                        <li>Good understanding of Asynchronous request.</li>
                        <li>Created A/B testing experiences using tools like VWO, Optimizely and Adobe Experience Manager.</li>
                        <li>Source Control (Git).</li>
                        <li>Hands-on experience in React JS</li>
                        <li>Automation (Webpack), dependency management (npm, bower, yarn).</li>
                        <li>Working knowledge of email clients (ie: mailchimp etc), ability to create responsive emails.</li>
                        <li>Integrating, recommending, discussing best practices in front-end web development.</li>
                        <li>Working closely with third party suppliers to make sure code quality is up to standard.</li>
                        <li>Improving quality of front-end code by participating in code reviews.</li>
                        <li>Contributing to and maintaining front-end web development documentation.</li>
                    </ul>
                    <hr/>

                    <h4>UI Developer <a href="https://www.linkedin.com/company/vinfotech" target="_blank" rel="noopener noreferrer">@Vinfotech</a></h4>
                    <p>{moment(this.state.vinfotech.startDate).format("MMM YYYY")} - {moment(this.state.vinfotech.endDate).format("MMM YYYY")} ({this.yearsMonths(this.state.vinfotech.startDate, this.state.vinfotech.endDate)}) <br/>Indore, India</p>
                    <p>Provided front-end production for selected clients including Social Network, Start-ups. Pushed client adoption of mobile support and CSS3 standards like media queries, Responsive Web design and @font-face, transformed complex, high quality PSD design into hand coded standards compliant HTML/CSS. Built a library of re-usable UI elements. Designed and effectively developed front-end of websites in a clean, well structured, easily maintainable format. Responsible for meeting expectations and deliverables on time and in high quality. Communicate effectively in both technical and business environments.</p>

                    <hr/>
                    <h4>Web Designer <a href="http://kalptaru-infotech-ltd.software.informer.com/" target="_blank" rel="noopener noreferrer">@Kalptaru Infotech Ltd</a></h4>
                    <p>{moment(this.state.kalptaru.startDate).format("MMM YYYY")} - {moment(this.state.kalptaru.endDate).format("MMM YYYY")} ({this.yearsMonths(this.state.kalptaru.startDate, this.state.kalptaru.endDate)})<br />Indore, India</p>
                    <p>Experience managing in-house design, research, product management, front-end development and editing designs and able to build an innovative designs.</p>

                    <hr/>
                    <h4>Graphic Designer <a href="https://www.linkedin.com/company/535573?trk=vsrp_companies_res_name&trkInfo=VSRPsearchId%3A751603211470410842026%2CVSRPtargetId%3A535573%2CVSRPcmpt%3Aprimary" target="_blank" rel="noopener noreferrer">@Naidunia Media Pvt Ltd</a></h4>
                    <p>{moment(this.state.naidunia.startDate).format("MMM YYYY")} - {moment(this.state.naidunia.endDate).format("MMM YYYY")} ({this.yearsMonths(this.state.naidunia.startDate, this.state.naidunia.endDate)})<br />Indore, India</p>
                    <p>Designed highly creative advertisement for newspaper industry.</p>
                </div>
            </React.Fragment>
        )
    }
}