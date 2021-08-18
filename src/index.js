import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

const divRoot = document.querySelector('#root');  //fa referencia al divRoot de la carpeta public el index html.

// console.log(divRoot);

ReactDOM.render( <CounterApp value={ 10 }/>, divRoot )  //cridem el objecte ReactDOM, seguit del metode render, que vol dir: renderitza o mostra això.
