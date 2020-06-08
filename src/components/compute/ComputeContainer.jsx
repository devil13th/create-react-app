import React from 'react';
import { connect } from 'react-redux'
import actions from '@/components/compute/Actions'
import Compute from '@/components/compute/Compute'


const mapStateToProps  =  function(state , ownProps){
  console.log(state)
  return {
    data : state.computeData        //将state中定义的数据（text）返回到props上。这样在类中就能通过this.props.text访问到state中的数据
  }
}
 const mapDispatchToProps = function(dispatch , ownProps){
    return {
        onPlus : (e)=>{        //返回一个方法到props上，这样就可以通过this.props.funcname( 'tt' )调用这个方法，并调用dispatch
          //dispatch( Action.action1( { type : action1type  ,  payload : 'sunny' } ) )    //调用dispatch 创建一个action，并修改state
          console.log(ownProps)
          dispatch(actions.plusAction(1));
          console.log(e)
        },
        onSubstract : (e)=>{        //返回一个方法到props上，这样就可以通过this.props.funcname( 'tt' )调用这个方法，并调用dispatch
          //dispatch( Action.action1( { type : action1type  ,  payload : 'sunny' } ) )    //调用dispatch 创建一个action，并修改state
          console.log(ownProps)
          dispatch(actions.substractAction(1));
          console.log(e)
        }
    }
}
const ComputeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(Compute)

export default ComputeContainer
