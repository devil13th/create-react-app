import { createStore } from 'redux'
import appReducer from '@/redux/reducer'
let store = createStore(appReducer)
export default store;