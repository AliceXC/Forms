// where to render all react elements
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './React Example/App';
import TitleUI from './view/TitleUI';
import * as serviceWorker from './serviceWorker';

// example: ReactDOM.render(<App />, document.getElementById('root'));

TitleUI.example();
ReactDOM.render(<TitleUI />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
