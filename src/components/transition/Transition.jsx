
import React from 'react'
import ReactDOM from 'react-dom'
import Transition from 'react-transition-group/Transition';

/**
 * 
** children 
    指的是Transition标签包含的待应用动画的元素，可以使用react的元素，也可以直接用函数，函数可以接受state参数
    state的代表动画的4个状态
        entering
        entered
        exiting
        exited
** in
    应用于Transition标签上面，切换enter和exit，从而出现动画效果，布尔值
** mountOnEnter
    在元素enter的时候才挂载，布尔值
** unmountOnExit
    在元素exit的时候销毁，布尔值
** appear
    默认情况下Transition初次挂载的时候不应用动画
    设置为apear之后，会自动应用一次enter动画
    布尔值
** enter
    是否启用enter时候的动画，布尔值
    作用和设置timeout为0一样
** exit
    是否启用exit时候的动画，布尔值
    作用和设置timeout为0一样
** timeout
    过渡的持续时间，必须设置此值，除非addEventListener提供了
    timeout = {500}或者
    timeout = {{
        enter: 300,
        exit: 500
    }}
** addEndListener
    用来监听dom节点的transition结束事件
    addEndListener = {
        (node,done) => {
            node.addEventListener('transitionend', function(){
                alert(111);
            });
            done();
        }
    }
    node是dom元素节点，done是切换状态的回调函数
** onEnter
    用来监听 enter 状态的钩子函数
    onEnter={ 
        (node,isAppearing) => {console.log(node,isAppearing)
    }
    node是dom节点
    isAppearing是appear属性值
    另外 onEntering 和 onEntered用法类似
** onExit   
    用来监听 exit 状态开始触发的钩子函数
    onExit={ 
        (node) => {console.log(node)
    }
    另外 onExiting 和 onExited 用法类似
 */
const duration = 200;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  width: "100px",
  height: "100px",
  background: "red"
}
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};
class Transation extends React.Component {
  constructor() {
    super();
    this.state = {
      in: false
    }
  }
  toggleEnterState = () => {
    this.setState({ in: !this.state.in })
  }
  render() {
    return (
      <div>
        <Transition in={this.state.in} timeout={1000} mountOnEnter={true} unmountOnExit={true}>
          {(state) => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              I'm A fade Transition!
            </div>
          )}
        </Transition>
        <button onClick={this.toggleEnterState}>Click to Enter</button>
      </div>
    )
  }
}


export default Transation; 