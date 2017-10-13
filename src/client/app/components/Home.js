import React from 'react'
import {Row,Col} from 'react-bootstrap'

const Home = ()  => (
    <div className = "view">
		<div className = "view-inner">
          <h3 className = "view-heading">Jillian Brett: Web Developer </h3>
			
			<Row>
			<Col xsOffset = {0} xs = {7}>
			<p className = "home-text">Hi my name is Jillian Brett. I made this application to display and futher develop my web development skills.</p>
		    </Col>
			<Col xs = {5}>
			   <img src = "img/Bali.jpg" className = "bali-img" />
			 </Col>
			 </Row>
		</div>
    </div>
)

export default Home