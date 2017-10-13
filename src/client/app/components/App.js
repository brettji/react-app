import React from 'react'
import Header from './Header'
import Main from './Main'
import Banner from './Banner'
import {Row,Col} from 'react-bootstrap'

const App = () => (
	<div>
	 <Banner/>
		<Row>
			<Col xsOffset = {2} xs = {1}>
				<Header/>
			</Col>
			<Col xs = {7}>
				<Main/>
			</Col>
		</Row>
	</div>
) 
export default App