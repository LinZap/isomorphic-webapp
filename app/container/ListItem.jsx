import { connect } from 'react-redux'
import ListItemComponent from '../component/ListItem.jsx'

const mapStateToProps = (state) => {
	let { list } = state
	return {
		list
	}
}

const mapDispatchToProps = (dispatch) => {
	return { }
}

const ListItem = connect(
	mapStateToProps
	//,mapDispatchToProps
)(ListItemComponent)

export default ListItem