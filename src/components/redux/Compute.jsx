import React from 'react';
import { connect } from 'react-redux'
import actions from '@/components/redux/Actions'
class Compute extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div>
        {JSON.stringify(this.props.data)}<br/>
        我今年 <span style={{fontSize:14,fontWeight:"bold"}}>{this.props.data.i}</span> 岁

        <input type="button" value="好好吃饭了" onClick={this.props.plus}/>
        
        <input type="button" value="没有好好吃饭" onClick={this.props.substract}/>
      </div>
    )
  }
}


const mapStateToProps  =  function(state , ownProps){
  console.log(state)
  return {
    data : state.compute        //将state中定义的数据（text）返回到props上。这样在类中就能通过this.props.text访问到state中的数据
  }
}
 const mapDispatchToProps = function(dispatch , ownProps){
    return {
        plus : (e)=>{        //返回一个方法到props上，这样就可以通过this.props.funcname( 'tt' )调用这个方法，并调用dispatch
          //dispatch( Action.action1( { type : action1type  ,  payload : 'sunny' } ) )    //调用dispatch 创建一个action，并修改state
          console.log(ownProps)
          dispatch(actions.plusAction(1));
          console.log(e)
        },
        substract : (e)=>{        //返回一个方法到props上，这样就可以通过this.props.funcname( 'tt' )调用这个方法，并调用dispatch
          //dispatch( Action.action1( { type : action1type  ,  payload : 'sunny' } ) )    //调用dispatch 创建一个action，并修改state
          console.log(ownProps)
          dispatch(actions.substractAction(1));
          console.log(e)
        }
    }
}
const ComputeComponent = connect(
  mapStateToProps,
  mapDispatchToProps
  )(Compute)

export default ComputeComponent
