import React from 'react'
import Transition from 'react-transition-group/Transition';
import {TransitionGroup} from 'react-transition-group'


/**
 * ** component
    默认TransitionGroup是渲染成div，可以通过指定component改变这一默认行为
** appear
    是否执行初次渲染enter动画
** enter
    是否开启enter动画
** exit
    是否开启exit动画
** childFactory
    此函数是TransitionGroup将要展示子元素的拦截器
    childFactory={(el) => {console.log(el);return el}}
 */
const duration = 300;
const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    width: "20px",
    height: "20px",
    background: "red"
}
const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
};


class TransitionGroupExam extends React.Component {
  constructor() {
    super();
    this.state = {
        arr: ['a','c','d','e']
    }
}
addItem = () => {
this.setState({
    arr: this.state.arr.concat(['f'])
});
}
render() {
    return (
    <div>
        <TransitionGroup component="span" appear>
            {this.state.arr.map( (item,index) => (
                <Transition key={index} timeout={0}>
                    {(state) => (
                        <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                        }}>
                        {item}
                        </div>
                    )}
                </Transition>
            ) )}
        </TransitionGroup>
        <button onClick={this.addItem}>添加元素</button>
    </div>
    )
}
}


export default TransitionGroupExam; 