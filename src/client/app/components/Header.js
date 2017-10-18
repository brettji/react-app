import React from 'react'
import {Link} from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'

const Header = () => (
<div>
<Col xs = {5}>
	   <img src = "img/border.png" className = "border-img" />
</Col>
<Col xsOffset = {3} xs = {3}>
		

		<div className = "header-nav">
			<ul className="header">
				<li><Link to = '/'>Home</Link></li>
				<li><Link to = '/about'>Experience</Link></li>
				<li><Link to = '/about-ed'>Education</Link></li>
			</ul>
		</div>

</Col>
</div>
)
export default Header