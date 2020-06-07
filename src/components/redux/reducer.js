import { combineReducers } from 'redux'
import actionTypes from '@/components/redux/ActionTypes'


// 过滤待办相关操作
function compute(state = {i:0}, action) {
  console.log('reducer compute() ..............')
  console.log(state);
  switch (action.type) {
    case actionTypes.PLUS:
      // alert("+1")
      return {...state,i:state.i + 1}
    case actionTypes.SUBSTRACT:
      // alert("-1")
      return {...state,i:state.i - 1}
    default:
      return state;
  }
}

const appReducer = combineReducers({
  compute
});

export default appReducer