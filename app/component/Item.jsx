import React, { Component } from 'react'
import { get_member } from '../action'

class Item extends Component {

  constructor(props) {
    super(props)
	   let {params,dispatch} = props,
		      {id} = params
	     dispatch(get_member(id))
  }

  render() { 
    let {isfetching,error,data} = this.props.member
    return (
		<div>
			<h3>Member</h3>
			<p>name: {isfetching? 'loading': data.name }</p>
			<p>age: {isfetching? 'loading': data.age }</p>
      <p>watch out url bro ^^</p>
		</div>
    )
  }
}

export default Item