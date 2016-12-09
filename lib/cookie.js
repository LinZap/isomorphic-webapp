/*
	Cookie parser
	by Zap
*/

export function setCookie(key,value,minute=30){
	var d = new Date()
	d.setTime(d.getTime() + (minute*60*1000))
	var tmp = `${key}=${value}; expires=${d.toString()}`
	document.cookie = tmp
	return tmp
}

export function getCookie(key){
	var res = false,
		tmp = document.cookie.split('; ')

	for (var i = 0; i < tmp.length; i++) {
		var sp = tmp[i].split('=')
		if(sp[0]==key){
			res = sp[1]
			break
		}
	}
	return res
}

export function removeCookie(key){
	document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}
