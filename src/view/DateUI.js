import React, {Component} from 'react';
import "../css/DateUI.css";
import "../css/form-element.css";

class DateUI extends Component{
    constructor(props){
        super(props);
        this.state = {

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
            
            </div>
        );
    }
}

export default DateUI;