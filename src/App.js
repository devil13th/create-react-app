import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import{BrowserRouter,HashRouter,Switch,Route,Link} from 'react-router-dom'
import MyParentComponent from '@/components/test/MyParentComponent'
import ComputeContainer from '@/components/compute/ComputeContainer'
import TodoApp from '@/components/todo/index'
import Index from '@/layout/Index'
import store from '@/store'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {str:''}
    this.showState = this.showState.bind(this);
    
  }
  showState(){
    this.setState({str:JSON.stringify(store.getState())});
  }
  componentDidMount(){
    this.showState();
  }

  render(){

    const str = "Hello React";
    return (
      <HashRouter>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/component">Component</Link>
            </li>
            <li>
              <Link to="/compute">ComputeContainer</Link>
            </li>
            <li>
              <Link to="/TodoApp">TodoApp</Link>
            </li>
          </ul>
        </nav>
          


     
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/component">
            <MyComponent/>
          </Route>
          <Route path="/compute">
            <ComputeContainer/>
          </Route>
          <Route path="/TodoApp">
            <TodoApp/>
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
          



        <hr/>
    <input type="button" value="refresh" onClick={this.showState}/> 全局State :
    {this.state.str}
    <hr/>

      </div>
    </HashRouter>
    )
  }
}




function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function MyComponent(){
  return <MyParentComponent></MyParentComponent>
}


export default App;
