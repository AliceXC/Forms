import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css'
import MCQmodalUI from './MCQmodalUI'

class AddUI extends Component {
    
    render(){
        return(
            //react-bootstrap
            <div className="ui-container" id="addui-container">
                 <div id="dropdown" tabIndex="-1" onBlur={AddUI.displayNone} onClick={AddUI.changeDropdownStatus}>
                    {/* TODO add glyphicons*/}
                    <div id="dropdown-button">
                        New feature
                    </div>
                    <div id="dropdown-content" > 
                        <div className="dropdown-item">MCQ</div> 
                        {/* TODO UNCOMMENT WHEN MODAL DONE onClick={AddUI.addMCQSingle} */}
                        <div className="dropdown-item">option2</div>
                        <div className="dropdown-item">option3</div>
                    </div>
                </div>
                <div id="MCQ-modal-container"></div>
            </div>
            
        );
    };

    static addMCQSingle(){
        // use modal to get user inputs (description, # of choices, 
        //             choice descriptions,cancel button, add button, etc)
        ReactDOM.render(<MCQmodalUI />, document.querySelector("#MCQ-modal-container"));
        // TODO once finish styling mcq modal, uncomment the line below
        // document.querySelector("#MCQ-modal").style.display = "block";

        // create MCQsingle object
        // render MCQsingleUI
        return true;
    }

    static displayNone(){
        document.querySelector('#dropdown-content').style.display='none';
    }

    static changeDropdownStatus(){
        let status = getComputedStyle(document.querySelector("#dropdown-content")).getPropertyValue('display');
        if(status === "block"){
          document.querySelector('#dropdown-content').style.display='none';
        }else if(status === "none"){
          document.querySelector('#dropdown-content').style.display='block';
        }
      }
}


export default AddUI;