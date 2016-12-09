/*
	collect a form elements' value 
	return {
		element_name: value
		...
	}
*/
export default function(form) {
	let data = {}
	if(!form) return null;
	
	for (var i = 0; i < form.elements.length; i++) {
		if(form.elements[i].name)
			data[form.elements[i].name] = form.elements[i].value
	}
	return data;
}