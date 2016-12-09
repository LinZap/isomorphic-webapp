import { fork,take,call,put } from 'redux-saga/effects'
import * as actions from '../action'
import api from '../../lib/api.js'


export default function* () {
	yield fork(getList)
	yield fork(getMember)
}

function api_getlist(){ return api({cmd: 'list'}) }

function* getList(){
	while(true){

		yield take(actions.GET_LIST)
		const data = yield call( api_getlist )

		yield put(data?
			actions.set_list(data):
			actions.err_list()
		)
	}
}


function api_getmember(name){return api({cmd: name})}

function* getMember(){
	while(true){

		const {name} = yield take(actions.GET_MEMBER)
		const data = yield call( api_getmember, name)

		yield put(data?
			actions.set_member(data):
			actions.err_member()
		)
	}
}