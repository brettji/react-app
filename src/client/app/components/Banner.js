import React from 'react'
import {Row,Col} from 'react-bootstrap'

const Banner = ()  => (
  <div className = "banner"> 
	<Row>
	<Col xsOffset ={2} xs  = {9} nameClass = "no-padding" >
			<div className = "circles"> 
			<img className ="img-circle circle2" src = "img/flowerBackgroundSquare.png"/>
				<img className ="img-circle circle2" src = "img/flowerBackgroundSquare.png"/>
				<img className ="img-circle circle2" src = "img/flowerBackgroundSquare.png"/>
				<img className ="img-circle circle2" src = "img/flowerBackgroundSquare.png"/>
				<div className = "bannerText">
					<div className = "bannerText-top">Jillian</div>
					<div className = "bannerText-bottom">Brett</div>
				</div>
				<img className ="img-circle circle2" src = "img/flowerBackgroundSquare.png"/>
				<img className ="img-circle circle2" src = "img/flowerBackgroundSquare.png"/>
				<img className ="img-circle circle2" src = "img/flowerBackgroundSquare.png"/>
				<img className ="img-circle circle2" src = "img/flowerBackgroundSquare.png"/>
				
			</div>
		</Col>
	</Row>
	</div>
		 
		)	
export default Banner