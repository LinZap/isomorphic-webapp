import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducer'
import createSagaMiddleware from 'redux-saga'
import config from '../../config.json'

const sagaMiddleware = createSagaMiddleware()
let middlewares = [sagaMiddleware]
if(config.DEBUG) middlewares.push(createLogger())

export default function configureStore(initialState) {
	return {
		...createStore(
			rootReducer,
			initialState,
			applyMiddleware.apply(this,middlewares)
		),
		runSaga: sagaMiddleware.run
	}
}