import React from 'react'
import { render } from 'react-dom'
import { createHistory } from 'history'
import { Provider } from 'react-redux'
import { useRouterHistory,Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/index.js'
import rootSaga from './saga/index.js'
import routes from './router.js'

const rootNode = document.getElementById('section'),
	  store = configureStore(),
	  browserHistory = useRouterHistory(createHistory)({basename: '/'}),
	  history = syncHistoryWithStore(browserHistory, store)

store.runSaga(rootSaga)

render(
	<Provider store={store}>
		<Router history={history} routes={routes()} />
	</Provider>
,rootNode)