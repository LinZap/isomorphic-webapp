import {
	GET_MEMBER,
	SET_MEMBER,
	ERR_MEMBER,
} from '../action'

export default function(state={
	data: {},
	isfetching: false,
	error: false,
},action){

	switch(action.type) {

		case GET_MEMBER:
			return {
				...state,
				isfetching: true,
				error: false
			}

		case ERR_MEMBER:
			return{
				...state,
				isfetching: false,
				error: true,
			}

		case SET_MEMBER:
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