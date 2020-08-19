import React from 'react';
import { Layout, Menu } from 'antd';
import { Lifecycle } from 'react-router'
import{HashRouter,Switch,Route} from 'react-router-dom'
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

  xx(obj){
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

            <HashRouter>
              <Switch>
                <Route path="/about" onEnter={this.xx(this)} onLeave={this.xx(this)}>
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>

                <Route path="/compute">
                  <ComputeContainer />
                </Route>
                <Route path="/TodoApp">
                  <TodoApp />
                </Route>

               
              </Switch>
            </HashRouter>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default IndexLayout;