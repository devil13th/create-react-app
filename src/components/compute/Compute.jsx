import React from 'react';



// const Compute = function({data, onPlus, onSubstract }){
//   return (
//     <div>
//       {JSON.stringify(data)}<br/>
//       我今年 <span style={{fontSize:14,fontWeight:"bold"}}>{data.i}</span> 岁
//       <input type="button" value="好好吃饭了" onClick={onPlus}/>
//       <input type="button" value="没有好好吃饭" onClick={onSubstract}/>
//     </div>
//   )
// }

// export default Compute




class Compute extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return (
      <div style={{marginLeft:10}}>
        {JSON.stringify(this.props.data)}<br/>
        我今年 <span style={{fontSize:14,fontWeight:"bold"}}>{this.props.data.i}</span> 岁
        <input type="button" value="+" onClick={this.props.onPlus}/>
        <input type="button" value="-" onClick={this.props.onSubstract}/>
      </div>
    )
  }
}


export default Compute
