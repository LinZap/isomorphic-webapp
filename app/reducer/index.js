import { combineReducers } from 'redux'
import { routerReducer} from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import member from './member.js'
import list from './list.js'

const rootReducer = combineReducers({
	form: formReducer,
	routing: routerReducer,
	list,
	member,
})

export default rootReducer