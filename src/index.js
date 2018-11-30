// where to render all react elements
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './React Example/App';
import TitleUI from './view/TitleUI';
import * as serviceWorker from './serviceWorker';
import AddUI from './view/AddUI';
import MCQmodalUI from './view/MCQmodalUI'

ReactDOM.render(<TitleUI />, document.querySelector('div#Title-container'));
ReactDOM.render(<AddUI />, document.querySelector('div#AddFeature-container'));

// TODO REMOVE LINE BELOW ONCE MODAL style IS DONE
ReactDOM.render(<MCQmodalUI />, document.querySelector("#MCQ-modal-container"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
