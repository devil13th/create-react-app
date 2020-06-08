import { combineReducers } from 'redux'
import computeReducer from '@/components/compute/reducer' 
const appReducer = combineReducers({
  computeData:computeReducer
});

export default appReducer