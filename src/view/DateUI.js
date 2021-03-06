import React, {Component} from 'react';
import "../css/DateUI.css";
import "../css/form-element.css";

class DateUI extends Component{
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
                <span className="element-type">Date</span>
                <div className="form-element-description">
                    <textarea className="question-description" rows="4" maxLength="300" placeholder="Please enter the question description."></textarea>
                </div>

                <div className="date-input">
                    <input className="date-label" type="text" maxLength="15" placeholder="Label"></input><span> :  </span><input className="date" type="date"></input>
                </div>
                <span className="remove-button element-button" onClick={this.removeElement}>Remove</span>
            </div>
        );
    }
}

export default DateUI;