import { combineReducers } from 'redux'
import computeReducer from '@/components/compute/reducer' 
import  todoReducer from '@/components/todo/reducer'
import indexReducer from '@/layout/IndexReducer'
const appReducer = combineReducers({
  computeData : computeReducer,
  todoData : todoReducer,
  indexData: indexReducer
});

export default appReducer