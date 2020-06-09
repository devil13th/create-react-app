import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '@/components/todo/components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.todoData.type
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink