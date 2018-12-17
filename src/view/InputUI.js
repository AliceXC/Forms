import React, {Component} from 'react';
import "../css/InputUI.css";
import "../css/form-element.css";

class InputUI extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
        };
        this.removeElement = this.removeElement.bind(this);
    }

    // remove the current form element, in this case, the current MCQ element
    removeElement(){
        // TODO alert() if want to remove the current form element 
        this.props.handleDelete(this.state.id);
    }

    render(){
        return(
            <div className="form-element-container">
                <span className="element-type">Input</span>
                <div className="form-element-description">
                    <textarea className="question-description" rows="4" maxLength="300" placeholder="Please enter the question description."></textarea>
                </div>

                
                {/* customized placeholder for user input*/}
                <div className="input-placeholder-container">
                    <span>Short hint (user input):</span>
                    <input className="input-placeholder" maxLength="100"></input>
                </div>

                {/* TODO modify css style such that no matter how the broswer rescaled, 
                            question description textarea and input placeholder always line up*/}

                {/* customized input length for user input*/}
                <div className="input-length-container">
                    <span>Max length (user input):</span>
                    <input className="input-length" type="number" min="1"></input>
                </div>
                

                <span className="remove-button element-button" onClick={this.removeElement}>Remove</span>
            </div>
        );
    }
}

export default InputUI;