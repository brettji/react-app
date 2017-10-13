import React from 'react'
import Header from './Header'
import Main from './Main'
import Banner from './Banner'
import {Row,Col} from 'react-bootstrap'

const App = () => (
	<div>
	 <Banner/>
		<Row>
			<Col xs = {2}>
				<Header/>
			</Col>
			<Col xs = {10}>
				<Main/>
			</Col>
		</Row>
	</div>
) 
export default App