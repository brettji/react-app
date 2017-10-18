import React from 'react'
import Header from './Header'
import Main from './Main'
import Banner from './Banner'
import Footer from './Footer'
import {Row,Col} from 'react-bootstrap'

const App = () => (
	<div>
		<div className = "content">
			<Row>
				<Header/>
			</Row>
			<Row>
				<Main/>
			</Row>
		</div>
			<Footer/>
	</div>
) 
export default App