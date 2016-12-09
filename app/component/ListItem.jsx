import React, { Component } from 'react'
import { Link } from 'react-router'
import Loading from '../img/loading.gif'
import { get_list,get_member } from '../action'

class ListItem extends Component {

  constructor(props) {
  	super(props)
    const {dispatch} = props
    dispatch(get_list())
  }

  render() {  

  	let {list,children,dispatch} = this.props,
  	  	{isfetching,error,data} = list

    return (
		<div>
			<h1>ListItem</h1>
			
			{isfetching?
				<img src={Loading}/>:
				<ul>{links(data,dispatch)}</ul>
			}

			<div>{children?children:null}</div>
		</div>
    )
  }
}

const links = (data,dispatch)=>{
	return data.map(d=>
		<li key={d} 
			onClick={ e=>dispatch(get_member(d)) }>
			<Link to={`list/${d}`}>{d}</Link>
		</li>
	)
}

export default ListItem