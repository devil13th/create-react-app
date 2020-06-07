import React from 'react';

import PropTypes from 'prop-types';

class MyComponent extends React.Component{

  constructor(props){
    super(props);
    console.log(" MyComponent constructor()");

    
    this.state = {
      name : this.props.name,
      age : this.props.age
    }

    // ##### 如果不使用箭头函数则需要将this对象绑定到函数 #####
    // this.increase = this.increase.bind(this);
  }

  // 如果不使用箭头函数则需要在constructor中绑定this对象
  increase = () => {
    fetch('/tt/requestparameter/testGet02/2015_01_01/1586085091').then(function(response) {
      return response.json();
    }).then(function(myJson) {
      console.log(myJson);
    });

    this.setState({
      age : this.state.age + 1
    })
  }


  render(){
    return(
      <div style={{margin:5,padding:5,border:"3px solid #eee",borderRadius:5,width:200,height:100}}>

        {/* ##### JSX中直接输出JS变量要使用{} ##### */}
        {this.state.name} | {this.state.age} | {this.props.age} <br/>
        <input type="button" onClick={this.props.increase || this.increase } value="grown"/>
        {/* ##### 获取元素的子元素 ##### */}
        {this.props.children}
      </div>
    );
  }
}


MyComponent.propTypes = {
  number:PropTypes.string,
  age:PropTypes.number
}
export default MyComponent;