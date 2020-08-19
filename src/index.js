import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from '@/store'
import 'antd/dist/antd.css';
import './index.css';


import a  from '@/importTest/user.js';
import b  from '@/importTest/b.js';
import c  from '@/importTest/c.js';
import x  from '@/importTest/user.js';
import z from '@/importTest/user.js';
console.log("a",a)
console.log("b",b)
console.log("c",c)
console.log("c",x)
x.sex='女'
console.log("b",b)
console.log("z",z)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
