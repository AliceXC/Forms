import React, {Component} from 'react';
import "../css/NumberUI.css";
import "../css/form-element.css";

class NumberUI extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
        };
        this.removeElement = this.removeElement.bind(this);
        this.Number = this.Number.bind(this);
    }

    // remove the current form element, in this case, the current MCQ element
    removeElement(){
        // TODO alert() if want to remove the current form element 
        this.props.handleDelete(this.state.id);
    }

    // TODO when submit, validate if max>=min
    // the Number jsx
    Number(){
        return(
            <div className="number-input">
                <div>Please set up the min and max limit of the number input.</div>
                <div className="number-limit">
                    <label>Min: </label><input type="number" className="number-min number"></input>
                    <label>Max: </label><input type="number" className="number-max number"></input>
                </div>
                <input className="number-label" type="text" maxLength="15" placeholder="Label"></input><span> :  </span><input className="number" type="number"></input>
            </div>
        );
    }

    // TODO set place for customizing min and max limit
    render(){
        return(
            <div className="form-element-container">
                <span className="element-type">Number</span>
                <div className="form-element-description">
                    <textarea className="question-description" rows="4" maxLength="300" placeholder="Please enter the question description."></textarea>
                </div>
                <this.Number />
                <span className="remove-button element-button" onClick={this.removeElement}>Remove</span>
            </div>
        );
    }
}

export default NumberUI;