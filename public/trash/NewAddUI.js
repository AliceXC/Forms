import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/NewAddUI.css';

import MCQUI from '../view/MCQUI.js';

class NewAddUI extends Component {
    constructor(props){
        super(props);

        this.state = {
            // none
        };

        this.addMCQsingle = this.addMCQsingle.bind(this);
    }
    
    render(){
        return(
            <div id="add-element-container">
                <span className="add-element" id="add-MCQ-single" onClick={this.addMCQsingle}>MCQ single answer</span>
                <span className="add-element" id="add-MCQ-multiple">MCQ multiple answers</span>
                <span className="add-element" id="add-date">Date</span>
                <span className="add-element" id="add-input">Input</span>
                <span className="add-element" id="add-number">Number</span>
            </div>            
        );
    };

    addMCQsingle(){
        ReactDOM.render(<MCQUI />, document.querySelector("div#testNewMCQsingle"));
    }

}


export default NewAddUI;