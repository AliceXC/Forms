import React, {Component} from 'react';
import "../css/main.css"

class MCQmodalUI extends Component {

    static closeModal(){
        document.querySelector("#MCQ-modal").style.display = "none";
    }

    static ModalHeader(props){
        return(
            <div className="modal-header">
                <span className="close icon-close" onClick={MCQmodalUI.closeModal}>&times;</span>
                <h4 className="modal-title">{props.header}</h4>
            </div>
        );
    }

    static ModalBody(props){
        return(
            <div className="modal-body">
                <div className="form-group">
                    <label for="MCQ-description">Multiple choice question description</label>
                    <textarea className="form-control" rows="4" maxLength="300" id="MCQ-description"></textarea>
                </div>

                {/* TODO style radio buttons*/}
                <div className="modal-radio-container">
                    <label for="single-choice">
                        <input type="radio" name="choice-number" value="single" id="single-choice" checked={true}></input>
                        Single choice
                    </label>
                    <label for="multiple-choice">
                        <input type="radio" name="choice-number" value="multiple" id="multiple-choice"></input>
                        Multiple choices
                    </label>
                </div>
            </div> 
        );
    }

    
    static ModalFooter(props){
        return(
            <div className="modal-footer">
                <input type="button" className="modal-btn close" id="modal-close" onClick={MCQmodalUI.closeModal} value="Close"></input>
                <input type="button" className="modal-btn" id="modal-create" value="Create"></input>
            </div>
        );
    }

    render(){
        return(
            // TODO simplify the code below. check react tutorial!
            /*<div className="form-group">
                <label htmlFor="number-choices">Number of available choices</label>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                        <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a href="#!">2</a></li>
                        <li><a href="#!">3</a></li>
                        <li><a href="#!">4</a></li>
                        <li><a href="#!">5</a></li>
                    </ul>
                </div>
            </div>
                    */
            <div className="modal ui-container" id="MCQ-modal" >
                <div className="modal-content">
                    <MCQmodalUI.ModalHeader header="Multiple choice question"/>
                    <MCQmodalUI.ModalBody />
                    <MCQmodalUI.ModalFooter />
                </div>
            </div>
        );
    }
}

export default MCQmodalUI;