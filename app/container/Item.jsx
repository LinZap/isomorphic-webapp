import { connect } from 'react-redux'
import { get_member } from '../action'
import ItemComponent from '../component/Item.jsx'

const mapStateToProps = (state) => {
	let { member } = state
	return {
		member
	}
}

const mapDispatchToProps = (dispatch,ownProps) => {
	let {params} = ownProps,
		{id} = params
	dispatch(get_member(id))
	return {}
}

const Item = connect(
	mapStateToProps
	//,mapDispatchToProps
)(ItemComponent)

export default Item