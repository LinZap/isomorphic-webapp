import React from 'react'
import { Route } from 'react-router'

import App from './component/App.jsx'
import About from './component/About.jsx'

import ListItem from './container/ListItem.jsx'
import Item from './container/Item.jsx'


export default function(){
	return (
		<Route path='/' component={App}>
			<Route path="list" component={ListItem}>
				<Route path=":id" component={Item}/>
			</Route>
			<Route path="about" component={About}/>
		</Route>
	)
}
