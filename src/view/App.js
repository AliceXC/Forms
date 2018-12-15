import React, {Component} from 'react';
import '../css/App.css';
import MCQUI from './MCQUI.js';

class App extends Component{
    constructor(props){
        super(props);

        this.state={
            counter: 0,
            children: [
                // {id:1, type:'MCQ'},
            ],
        }
        this.Title = this.Title.bind(this);
        this.checkLength = this.checkLength.bind(this);
        this.validateTitle = this.validateTitle.bind(this);
        this.AddElement = this.AddElement.bind(this);
        this.addMCQ = this.addMCQ.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    Title(){
        return (
            <div className="form-element Title-container" id="form-title">
                <p className="form-description" id="description-title">Please enter your title below.</p>
                <div className="form-input" id="input-title" onKeyDown={this.checkLength} contentEditable="true" onBlur={this.validateTitle}></div>
            </div>
            
        );
    }

    checkLength(e) {
        // set up max length of title input and prevent entering newlines 
        if((e.currentTarget.textContent.length > 50 && e.keyCode !== 8)|| (e.keyCode === 13)) {
            e.preventDefault(); 
        }
    }

    validateTitle(){
        // check title format and handle incorrect format
        // 1. trim off 
        let title = document.querySelector("div#input-title");
        title.innerText = title.innerText.trim();

        // 2. reject empty title
        if(title.innerHTML.length === 0){
            title.onfocus = ()=>{
                title.style.boxShadow = "none";
            }
            title.onblur = ()=>{
                title.style.boxShadow = "0px 0px 5px red";
            };
        }else{
            title.onblur = () => {return false};
        }
    }

    AddElement(){
        return(
            <div id="add-element-container">
                <span className="add-element" id="add-MCQ" onClick={this.addMCQ}>MCQ</span>
                <span className="add-element" id="add-date">Date</span>
                <span className="add-element" id="add-input">Input</span>
                <span className="add-element" id="add-number">Number</span>
            </div>            
        );
    }

    addMCQ(){
        let type = "MCQ";
        this.handleAddButton(type);
    }

    async handleAddButton(pType){
        let promise = new Promise((resolve)=>{
            this.setState((prevState)=>({
                counter: prevState.counter+1
            }));
            resolve();
        });
        await promise;
        
        let newChild = {id: this.state.counter, type: pType};

        promise = new Promise((resolve)=>{
            this.setState({
                children: [...this.state.children,newChild]
            });
            resolve();
        });
        await promise;
    }


    handleDelete(pID){
        this.setState((prevState) => ({
            children: prevState.children.filter(child => child.id !== pID)
        }))
    }

    render(){
        return(
            <React.Fragment>
                <this.Title />
                <this.AddElement />
                {
                    this.state.children.map((child)=>{
                        switch(child.type){
                            case 'MCQ':
                                return(<MCQUI key={child.id} id={child.id} handleDelete={this.handleDelete.bind(this)}/>);
                            default:
                                break;
                        }
                    })
                }
            </React.Fragment>
        );
    }
}

export default App;