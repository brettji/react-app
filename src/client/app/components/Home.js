import React from 'react'
import {Row,Col} from 'react-bootstrap'

const Home = ()  => (
    <div>
	<Col xsOffset = {1} xs = {10}>
	
			<Row>
			<Col xs = {6}>
			<h3 className = "view-heading">Jillian Brett: Web Developer </h3>
			<p className = "home-text">Hi my name is Jillian Brett. I made this application to display and futher develop my web development skills.</p>
	
				<div className = "profile" >
				<div className ="home-text">
				My career objective is to work for an organisation where I can use my skillset to develop myself and progress further in my career in the technology industry. I am eager to learn and strive to continuously challenge myself. I have strong communication and organisations skills and a can do approach to my work. 
				</div>
				</div>
		    </Col>
			<Col xs = {6}>
			   <img src = "img/Bali.jpg" className = "bali-img" />
			   <img src = "img/home-image.png" className = "bali-img" />
			   <img src = "img/home-image2.jpg" className = "bali-img" />
			 </Col>
			 </Row>
	</Col>
    </div>
)

export default Home