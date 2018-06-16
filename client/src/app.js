import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header'
import Body from './components/body/Body'

ReactDOM.render(
  <div className='full-ht'>
    <Header/>
    <Body/>
  </div>,
  document.getElementById('root')
);


