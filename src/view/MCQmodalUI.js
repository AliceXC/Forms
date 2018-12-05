import React, {Component} from 'react';
import "../css/MCQmodalUI.css"

class MCQmodalUI extends Component {

    constructor(props){
        super(props);

        this.state = { 
            question: '',
            typeOfChoices: 'single',
            numOfChoices: 2,
            choices: [
                {id:1, content:''},
                {id:2, content:''},
            ],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.ModalHeader = this.ModalHeader.bind(this);
        this.ModalFooter = this.ModalFooter.bind(this);
        this.ModalBody = this.ModalBody.bind(this);
        this.addChoice = this.addChoice.bind(this);
        this.incrementChoiceNumber = this.incrementChoiceNumber.bind(this);
        this.removeChoice = this.removeChoice.bind(this);
        this.validateDescription = this.validateDescription.bind(this);
        this.validateChoiceInput = this.validateChoiceInput.bind(this);
    }
    
    closeModal(){
        document.querySelector("#MCQ-modal").style.display = "none";
    }

    ModalHeader(props){
        return(
            <div className="modal-header">
                <span className="close icon-close" onClick={this.closeModal}>&times;</span>
                <h4 className="modal-title">{props.header}</h4>
            </div>
        );
    }

    ModalBody(){
        return(
            <div className="modal-body">
                <div className="form-group" >
                    <label htmlFor="MCQ-description">Multiple choice question description</label>
                    <textarea className="form-control" rows="4" maxLength="300" id="MCQ-description"></textarea>
                </div>

                <div className="modal-radio-container">
                    <label htmlFor="single-choice">
                        <input type="radio" name="choice-number" value="single" id="single-choice" 
                            checked={this.state.typeOfChoices === "single"} onChange={this.handleChange}></input>
                        Single choice
                    </label>
                    <label htmlFor="multiple-choice">
                        <input type="radio" name="choice-number" value="multiple" id="multiple-choice"
                            checked={this.state.typeOfChoices === "multiple"} onChange={this.handleChange}></input>
                        Multiple choices
                    </label>
                </div> 

                <div className="modal-choice-list-container">
                    <button id="add-choice" onClick={this.addChoice}>Add a choice</button>
                    <div className="modal-choice" id="modal-choice-1">
                        {"Choice " + 1 +": "}
                        <input className="input-choice" type="text" id="input-choice-1"></input>
                        <input type="button" value="remove" id="remove-modal-choice-1" onClick={this.removeChoice}></input>
                    </div>
                    <div className="modal-choice" id="modal-choice-2">
                        {"Choice " + 2 +": "}
                        <input className="input-choice" type="text" id="input-choice-2"></input>
                        <input type="button" value="remove" id="remove-modal-choice-2" onClick={this.removeChoice}></input>
                    </div>
                    
                </div>
            </div> 
        );
    }

    removeChoice(e){
        let str = e.currentTarget.id;
        str = str.substring(7);
        document.querySelector("#"+str).remove();
    }

    // NOTE: use async, await to avoid callAsyncFunc.then({some code...});  (callback hell)
    // Also it is not necessary to handle the return promise from the async addChoice function
    // since it is not returing anything
    async addChoice() {
        // no more than 10 choices 
        let size = document.querySelector("div.modal-choice-list-container").childElementCount-1;
        if(size<10){
            // increment numOfChoice
            await this.incrementChoiceNumber();
        
            // append new choice div to the choice-list-container
            let num = this.state.numOfChoices;
            let div = document.createElement('DIV');
            div.setAttribute("class","modal-choice");
            div.setAttribute("id","modal-choice-"+num);

            let textNode = document.createTextNode("Choice "+num+": ");

            let input = document.createElement("INPUT");
            input.setAttribute("class","input-choice");
            input.setAttribute("type","text");
            input.setAttribute("id","input-choice-"+num);

            let btn = document.createElement("INPUT");
            btn.setAttribute("type","button");
            btn.setAttribute("value","remove");
            btn.setAttribute("id","remove-modal-choice-"+num);
            btn.onclick = this.removeChoice;
            
            div.appendChild(textNode);
            div.appendChild(input);
            div.appendChild(btn);
            document.querySelector("div.modal-choice-list-container").appendChild(div);
        }else{
            // TODO alert at most 10 choices.
            
        }
}

    incrementChoiceNumber(){
        return new Promise((resolve) => {
            this.setState((prevState, props) => ({
                numOfChoices: prevState.numOfChoices+1
            }));
            resolve();
        });
    }

    async handleChange(event) {
        let promise = new Promise((resolve)=>{
            this.setState({
                typeOfChoices: event.target.value
            });
            resolve();
        })
        await promise;
    }

    ModalFooter(){
        return(
            <div className="modal-footer">
                <input type="button" className="modal-btn close" id="modal-close" onClick={this.closeModal} value="Close"></input>
                <input type="button" className="modal-btn" id="modal-create" value="Create" onClick={this.handleSubmit}></input>
            </div>
        );
    }

    async handleSubmit(event){
            // TOTO
            /*
                event.preventDefault();
            */
            let flag1, flag2;
            await this.validateDescription().then((pFlag)=>{
                flag1 = pFlag;
            });

            await this.validateChoiceInput().then((pFlag)=>{
                flag2 = pFlag;
            }); 

            if(flag1 && flag2){
                // store description and inputs into one prop
                // submit the form
                // exit current modal
                // call <MCQsingleUI prop/> or <MCQmultipleUI prop/>
                console.log("form valid!!");
                
            }else{
                console.log("form not valid!!!");
            }
    }

    async validateDescription() {
        let flag = true;
        let element = document.querySelector("textarea#MCQ-description");
        let pDescription = element.value.trim();
        if(pDescription === ""){
            element.style.boxShadow = "0px 0px 5px red";
            console.log("Empty MCQ description!");
            flag = false;
        }else{
            element.style.boxShadow = "none";
            let promise = new Promise((resolve)=>{
                this.setState({
                    question: pDescription
                });
                resolve();
            });
            await promise;
        }
        return flag;
    }
    
    async validateChoiceInput() {
        let choiceList = document.querySelectorAll("input.input-choice");
        let flag = true;
        for(let i=0; i<choiceList.length; i++){
            let element = choiceList[i];
            let text = element.value.trim();
            if(text === ""){
                element.style.boxShadow = "0px 0px 5px red";
                let pos = i+1;
                console.log("Empty choice input! at position " + pos);
                flag = false;
            }else{
                element.style.boxShadow = "none";
            }
        }
        return flag;
    }

    render(){
        return(
            <div className="modal ui-container" id="MCQ-modal" >
                <div className="modal-content">
                    <this.ModalHeader header="Multiple choice question"/>
                    <this.ModalBody />
                    <this.ModalFooter />
                </div>
            </div>
        );
    }
}

export default MCQmodalUI;