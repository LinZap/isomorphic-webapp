export default function(app){

	var data = [
		{
			name: 'Jay',
			age: '10'
		},
		{
			name: 'Tom',
			age: '13'
		},
		{
			name: 'Alex',
			age: '16'
		}
	]


	app.get('/api/list', function (req, res) {
		res.send(data.map(d=>d.name))
	})


	app.get('/api/:name', function (req, res) {
		var name = req.params.name,
			out = { message: 'nobody' }
		for (let i = 0; i < data.length; i++) 
			if(data[i].name==name){
				out = data[i]
				break
			}
		res.send(out)
	})



}