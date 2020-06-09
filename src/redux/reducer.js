import { combineReducers } from 'redux'
import computeReducer from '@/components/compute/reducer' 
import  todoReducer from '@/components/todo/reducer'
const appReducer = combineReducers({
  computeData : computeReducer,
  todoData : todoReducer
});

export default appReducer