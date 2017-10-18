import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {Carousel} from 'react-responsive-carousel'



function PositionDuration(props){
	return (
	<div>
		<div className = "positon" >Position: {props.position}</div>
		<div className = "duration">{props.start} - {props.end}</div>
	</div>
	)
}


function Skills(props) {
	var skills = props.skills;
	var list = skills.map(function(skill){
		return<li>{skill}</li>
}) 
	return <ul className = "skills-list" >{list}</ul>
	
}

function Responsibilitites(props) {
	var responsibilities = props.respons;
	var list = responsibilities.map(function(name){
		return<li>{name}</li>
}) 
	return <ul>{list}</ul>
	
}
const About = ()  => (

	<Row>
	<Col mdOffset={3} md = {6}>
<Carousel  showArrows={true} showThumbs={false}>	
    <div className = "position">
		<h3>Deloitte Ireland</h3>
			<div className = "project">
				<Row>
				<Col md = {8}>
			<h4>Project II</h4>
		
				<PositionDuration position = "Analyst" start = "September 2016" end = "Present"  />
					<Responsibilitites respons = {["Design and implement major application features ", "Develop mobile responsive screens which adhere to the organisation standard UX design", "Maintain continuous communication with business and test teams to implement application changes and bug fixes" , "Unit testing", "Integration testing"]} />
				</Col>
				<Col md = {4}>
				<div><strong>Methodology</strong></div>
				<div>Waterfall</div>
				<div><strong>Key Technologies</strong></div>
				<Skills skills = {["Java","HTML","CSS","JavaScript", "SQL", "Spring Tool Suite", "Apache Tomcat","SPIRA"]}/>
				</Col>
				</Row>
			</div>
		</div>
		 <div className = "position">
		<h3>Deloitte Ireland</h3>
			<div className = "project">
				<Row>
				<Col md = {8}>
			<h4>Project II</h4>
		
				<PositionDuration position = "Analyst" start = "September 2016" end = "Present"  />
					<Responsibilitites respons = {["Design and implement major application features ", "Develop mobile responsive screens which adhere to the organisation standard UX design", "Maintain continuous communication with business and test teams to implement application changes and bug fixes" , "Unit testing", "Integration testing"]} />
				</Col>
				<Col md = {4}>
				<div><strong>Methodology</strong></div>
				<div>Waterfall</div>
				<div><strong>Key Technologies</strong></div>
				<Skills skills = {["Java","HTML","CSS","JavaScript", "SQL", "Spring Tool Suite", "Apache Tomcat","SPIRA"]}/>
				</Col>
				</Row>
			</div>
		</div>
	</Carousel>
	</Col>
	</Row>
)

export default About