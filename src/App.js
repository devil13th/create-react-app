import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import{BrowserRouter,HashRouter,Switch,Route,Link} from 'react-router-dom'
import MyParentComponent from '@/components/test/MyParentComponent'
import ComputeContainer from '@/components/compute/ComputeContainer'
import Index from '@/layout/Index'
class App extends React.Component{


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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
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
