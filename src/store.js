import { createStore } from 'redux'
import appReducer from '@/components/redux/reducer'
let store = createStore(appReducer)
export default store;