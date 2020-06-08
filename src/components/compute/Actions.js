import actionTypes from '@/components/compute/ActionTypes'
// 定义要完成的操作

function plusAction(i) {
  return { type: actionTypes.PLUS,payload: i }
}

function substractAction(i) {
  return { type: actionTypes.SUBSTRACT, payload: i }
}

export default {plusAction,substractAction}


