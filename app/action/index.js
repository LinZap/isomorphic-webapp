export const GET_LIST = 'GET_LIST'
export const SET_LIST = 'SET_LIST'
export const ERR_LIST = 'ERR_LIST'

export function get_list(){
	return { type: GET_LIST }
}
export function err_list(){
	return { type: ERR_LIST }
}
export function set_list(data){
	return { type: SET_LIST, data }
}


export const GET_MEMBER = 'GET_MEMBER'
export const SET_MEMBER = 'SET_MEMBER'
export const ERR_MEMBER = 'ERR_MEMBER'

export function get_member(name){
	return { type: GET_MEMBER, name }
}
export function err_member(){
	return { type: ERR_MEMBER }
}
export function set_member(data){
	return { type: SET_MEMBER, data }
}