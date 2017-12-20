import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<h4><App></App></h4>, document.getElementById('root'));

registerServiceWorker();
// ReactDOM.render(<Api />, document.getElementById('root'));
// registerServiceWorker();
// ReactDOM.render(<Player name1='Marco' hp1={100} action1="fuck off" name2='Cristhian' hp2={100} action2="sing"/>, document.getElementById('root'));
