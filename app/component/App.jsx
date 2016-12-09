import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import '../css/index.styl'

const App = ({ children }) => (
	<div>
		<h1>Isomorphic Webapp</h1>
		<div>Full Stack developer => Express + Webpack + React + Redux + ReactRouter + ReduxSaga</div>

		<div>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='list'>ListItem</Link> </li>
				<li><Link to='about'>About</Link></li>
			</ul>
		</div>

		<div>{children?children:null}</div>
	</div>
)

export default App