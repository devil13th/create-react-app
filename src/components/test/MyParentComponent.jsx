import React from 'react'
import MyComponent from '@/components/test/MyComponent'
import { createHashHistory,createBrowserHistory } from 'history'; // 是hash路由 history路由 自己根据需求来定
 
const history = createHashHistory();
class MyParentComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {...props}
    console.log("MyParentComponent Constructor");
    this.state = {...this.state,
      name : "devil13th",
      age : 5
    }
  }

  increase = () => {
    alert(process.env.NODE_ENV)
    this.setState({
      age : this.state.age+1
    })
  }

  goHome = () => {
    alert(1)
    history.push('/')
  }
  render(){
    return(
      <div>

        <span onClick={this.goHome}>Home</span>


        <MyComponent
          name = {this.state.name}
          age = {this.state.age}        
        >      
          <div style={{border:"1px solid green",padding:3,lineHeight:"12px",color:"red",margin:5}}>xxxxx</div>
        </MyComponent>


        <MyComponent
          name = {this.state.name}
          age = {this.state.age} 
          increase = {this.increase}       
        >      
          <div style={{border:"1px solid red",padding:0,color:"red",margin:5}}>xxxxx</div>
        </MyComponent>
      </div>
    )
  }

}

export default MyParentComponent