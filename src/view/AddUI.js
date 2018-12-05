import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/AddUI.css'
import MCQmodalUI from './MCQmodalUI'

class AddUI extends Component {
    constructor(props){
        super(props);

        this.state = {
            // none
        };
        this.addMCQSingle = this.addMCQSingle.bind(this);
        this.displayNone = this.displayNone.bind(this);
        this.changeDropdownStatus = this.changeDropdownStatus.bind(this);
    }
    
    render(){
        return(
            //react-bootstrap
            <div className="ui-container" id="addui-container">
                 <div id="dropdown" tabIndex="-1" onBlur={this.displayNone} onClick={this.changeDropdownStatus}>
                    {/* TODO add glyphicons*/}
                    <div id="dropdown-button">
                        New feature
                    </div>
                    <div id="dropdown-content" > 
                        <div className="dropdown-item">MCQ</div> 
                        {/* TODO UNCOMMENT WHEN MODAL DONE onClick={this.addMCQSingle} */}
                        <div className="dropdown-item">option2</div>
                        <div className="dropdown-item">option3</div>
                    </div>
                </div>
                <div id="MCQ-modal-container"></div>
            </div>
            
        );
    };

    addMCQSingle(){
        // use modal to get user inputs (description, # of choices, 
        //             choice descriptions,cancel button, add button, etc)
        ReactDOM.render(<MCQmodalUI />, document.querySelector("#MCQ-modal-container"));
        // TODO once finish styling mcq modal, uncomment the line below
        // document.querySelector("#MCQ-modal").style.display = "block";

        // create MCQsingle object
        // render MCQsingleUI
        return true;
    }

    displayNone(){
        document.querySelector('#dropdown-content').style.display='none';
    }

    changeDropdownStatus(){
        let status = getComputedStyle(document.querySelector("#dropdown-content")).getPropertyValue('display');
        if(status === "block"){
          document.querySelector('#dropdown-content').style.display='none';
        }else if(status === "none"){
          document.querySelector('#dropdown-content').style.display='block';
        }
      }
}


export default AddUI;