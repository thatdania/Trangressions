import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Api from './Api';

import registerServiceWorker from './registerServiceWorker';

console.log(<App />)
ReactDOM.render(<h1><App></App></h1>, document.getElementById('root'));

registerServiceWorker();
// ReactDOM.render(<Api />, document.getElementById('root'));
// registerServiceWorker();
// ReactDOM.render(<Player name1='Marco' hp1={100} action1="fuck off" name2='Cristhian' hp2={100} action2="sing"/>, document.getElementById('root'));
