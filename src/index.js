import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; // 原始
// import App from './steps/1/Count';// 最简单的count
// import App from './steps/2/Parent'; // 传递信息
// import App from './steps/3/Count'; // 传递信息
// import App from './steps/4/Parent'; // 传递信息
// import App from './steps/5/index'; // 传递信息
import App from './steps/6/index'; // 传递信息
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
