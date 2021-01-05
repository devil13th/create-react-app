import React from 'react';
import IndexLayout from '@/layout/components/IndexLayout'

import{BrowserRouter,HashRouter,Switch,Route,Link} from 'react-router-dom'
import MyParentComponent from '@/components/test/MyParentComponent'
import ComputeContainer from '@/components/compute/ComputeContainer'
import TodoApp from '@/components/todo/index'
import Index from '@/layout/Index'



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  
  render(){
    
   
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/">
          <IndexLayout></IndexLayout>
        </Route>
      </Switch>
      </BrowserRouter>
  
     
    )
  }
}
export default App;
