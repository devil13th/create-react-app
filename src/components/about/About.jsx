import React from 'react';
import a from './about.module.css'
class About extends React.Component{
  render(){
    return (
      <div>
        <h1 class={a.title}>About</h1>
        <div class="content"> content </div>
      </div>
    )
  }
}

export default About