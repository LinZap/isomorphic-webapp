import querystring from 'querystring'
import fetch from 'isomorphic-fetch'
import { getCookie } from './cookie.js'
import contnetType from './contentType.json'
import { API } from '../config.json'

/*
	API (fetch)
	@cmd: string, host+{cmd} 
	@method: string, POST,GET... default GET
	@type: string, content-type default json (text or json)
	@data: object, will parse to payload or querystring
	@header: object, custom header
	@fileList: fileList (inputElement.file)
*/
export default function({
	cmd,
	method='GET',
	type='json',
	data={},
	header={},
	fileList=false
}){

	method = method.toUpperCase()
	type = type.toLowerCase()

	let option = {
			//credentials: 'include',
			method,
			headers: {
				'Accept': contnetType[type],
				...header,
			},
		},
		dataStr = querystring.stringify(data)

	if(method == 'GET' || method == 'PATCH' || method == 'DELETE'){
		cmd += "?" + dataStr
	}
	else{
		let formData = new FormData()
		if(fileList) {
			formData.append('file', fileList[0], fileList[0].name);
			for(let k in data)
				formData.append(k,data[k])
		}

		option.body = fileList ? formData : dataStr
		
		if(!fileList)
			option.headers['Content-Type'] = 'application/x-www-form-urlencoded'
	}

	let url =`${API}/${cmd}` 

	return fetch(url,option)
	.then(res=>
		(type=='json'?res.json():res.text()).then(d=>({d,res})))
		.catch(err=>false)
	.then( ({d,res}) => {
		if(res) {
			if(res.ok) return d
			else console.log({d,res})
		}
		return false
	})
}