import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group';
import './cssTransition.css';
/**
 * ** classNames 
    用在CSSTransition标签上面，自动添加状态后缀名
    classNames = "demo";
    会依次应用 demo-enter,demo-enter-active,demo-exit,demo-exit-active,demo-appear,demo-appear-active
    如果单独制定class的name的话可以使用如下
    classNames = {{
        appear: 'demo1',
        appearActive: 'demo2',
        enter: 'demo3',
        enterActive: 'demo4',
        exit: 'demo5',
        exitActive: 'demo6'
    }}
** onEnter
    在enter或者appear类应用完成后立马调用回调函数
        onEnter={ 
            (node,isAppearing) => {console.log(node,isAppearing)}
        }
** onEntering
    在enter-active或者appear-active应用完成后立马调用回调函数
        onEntering={ 
            (node,isAppearing) => {console.log(node,isAppearing)}
        }
** onEntered
    在enter或者appear移除完成后立马调用回调函数
        onEntered={ 
            (node,isAppearing) => {console.log(node,isAppearing)}
        }
** onExit
    在exit类应用完成后立即调用回调函数
        onEntered={ 
            (node) => {console.log(node)}
        }
** onExiting
    在exit-active类应用完成后立即调用回调函数
        onExiting={ 
            (node) => {console.log(node)}
        }
** onExited
    在exit类移除后立即调用
        onExited={ 
            (node) => {console.log(node)}
        }
 */
const defaultStyle = {
  width: "100px",
  height: "100px",
  background: "red"
}

class CssTransation extends React.Component {
  constructor() {
    super();
    this.state = {
      in: true
    }
  }
  toggleEnterState = () => {
    this.setState({ in: !this.state.in })
  }
  render() {
    return (
      <div>
        <CSSTransition in={this.state.in} timeout={500} classNames='bounceInLeft'>
          {(state) => (
            <div style={{
              ...defaultStyle
            }}>
              I'm A fade Transition!
            </div>
          )}
        </CSSTransition>
        <button onClick={this.toggleEnterState}>Click to Enter</button>
      </div>
    )
  }
}


export default CssTransation; 



