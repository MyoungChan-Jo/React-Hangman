import React from 'react'; //리액트를 사용하기위해 무조건적으로 들어가야하는 주소
import reactDom from 'react-dom'; //리액트를 사용하기위해 무조건적으로 들어가야하는 주소
import App from './App';


reactDom.render(
  <App/>, 
  document.getElementById('root'),
);

