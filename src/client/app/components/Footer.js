import React from 'react'
import {Row,Col} from 'react-bootstrap'

const Footer = ()  => (
  <div className = "footer-main"> 
  <Row>
	<Col xsOffset = {1} xs = {3}>
		<div className = "footer-nav">
			<ul className="footer">
				<li><a href = "https://www.linkedin.com/in/jillian-brett-67027862/" >LinkedIn</a></li>
				<li><a href = "https://github.com/brettji">Github</a></li>
			</ul>
		</div>
</Col>
</Row>
		 </div>
		)	
export default Footer