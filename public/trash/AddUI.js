import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/AddUI.css'
import MCQmodalUI from '../view/MCQmodalUI'

class AddUI extends Component {
    constructor(props){
        super(props);

        this.state = {
            // none
        };
        this.addMCQ = this.addMCQ.bind(this);
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
                        {/* TODO UNCOMMENT WHEN MODAL DONE onClick={this.addMCQ} */}
                        <div className="dropdown-item">option2</div>
                        <div className="dropdown-item">option3</div>
                    </div>
                </div>
                <div id="modal-container"></div>
            </div>
            
        );
    };

    addMCQ(){
        ReactDOM.render(<MCQmodalUI />, document.querySelector("div#modal-container"));
        // TODO once finish styling mcq modal, uncomment the line below
        // document.querySelector("#MCQ-modal").style.display = "block"; 
        // TODO position = "fixed" so the visible add-modal would
        // overlap any below elements (the below elements wont shift down )
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