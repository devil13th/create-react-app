import React from 'react';
import { Layout, Menu } from 'antd';
import { Lifecycle } from 'react-router'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { HashRouter, Switch, Route } from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import MyParentComponent from '@/components/test/MyParentComponent'
import ComputeContainer from '@/components/compute/ComputeContainer'
import TodoApp from '@/components/todo/index'

import IndexMenuContainer from '@/layout/containers/IndexMenuContainer';
import IndexHeaderContainer from '@/layout/containers/IndexHeaderContainer';
import Transition from '@/components/transition/Transition';
import CssTransition from '@/components/transition/CssTransition';
import TransitionGroupExam from '@/components/transition/TransitionGroup';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}



class IndexLayout extends React.Component {
  state = {
    focused: true,
  }

  xx(nexState,replace) {
    console.log(nexState,replace)
    alert(1)
  }

  render() {
    return (
      <Layout id="components-layout-demo-custom-trigger">
        <IndexMenuContainer></IndexMenuContainer>
        <Layout className="site-layout">
          <IndexHeaderContainer></IndexHeaderContainer>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >

            <HashRouter getUserConfirmation={(message, callback) => {
    // this is the default behavior
    alert(1)
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }}>
                <TransitionGroup className={'router-wrapper'}>
    <CSSTransition
      timeout={200}
      classNames={'fade'}
      in={this.state.focused}
    >
                  <Switch>
                    <Route path="/about" onEnter={this.xx} onLeave={this.xx}>
                      <About />
                    </Route>
                    <Route path="/users" onEnter={this.xx} onLeave={this.xx}>
                      <Users />
                    </Route>
                    <Route path="/transition" onEnter={this.xx} onLeave={this.xx}>
                      <Transition />
                    </Route>
                    <Route path="/cssTransition" onEnter={this.xx} onLeave={this.xx}>
                      <CssTransition />
                    </Route>
                    <Route path="/transitionGroup" onEnter={this.xx} onLeave={this.xx}>
                      <TransitionGroupExam />
                    </Route>
                    
                    
                    <Route path="/compute">
                      <ComputeContainer />
                    </Route>
                    <Route path="/TodoApp">
                      <TodoApp />
                    </Route>


                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </HashRouter>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default IndexLayout;