import {
	GET_LIST,
	SET_LIST,
	ERR_LIST,
} from '../action'

export default function(state={
	data: [],
	isfetching: false,
	error: false,
},action){

	switch(action.type) {

		case GET_LIST:
			return {
				...state,
				isfetching: true,
				error: false
			}

		case ERR_LIST:
			return{
				...state,
				isfetching: false,
				error: true,
			}

		case SET_LIST:
			return {
				...state,
				isfetching: false,
				error: false,
				data: action.data,
			}
			
		default:
			return state
	}
}