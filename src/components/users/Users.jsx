import React from 'react';
import u from './users.module.css'
class Users extends React.Component{
  componentDidMount(){
    alert(document.location.pathname)
    alert(document.location.search);
  }
  render(){
    return (
      <div>
        <h1 class={u.title}>Users</h1>
        <div class="content"> content </div>
      </div>
    )
  }
}

export default Users