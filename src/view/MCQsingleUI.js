import React, {Component} from 'react';
import "../css/MCQsingleUI.css";

class MCQsingleUI extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            question: props.question,
            choices : props.choices,
            selected: props.choices[0],
        };
        this.handleChange = this.handleChange.bind(this);
        this.ChoiceList = this.ChoiceList.bind(this);
        this.removeElement = this.removeElement.bind(this);
        this.ElementHeader = this.ElementHeader.bind(this);
    }

    async handleChange(event) {
        let promise = new Promise((resolve)=>{
            this.setState({
                selected: event.target.value
            });
            resolve();
        })
        await promise;
        // console.log("new choice:" + this.state.selected);
    }

    ChoiceList(){
        let choices = this.state.choices;
        let choiceList = choices.map((choice,index) => {
            let ID = "choice-"+index;
            return (
                <label className="choice-element" key={index} htmlFor={ID}>
                    <input type="radio" name="choice" value={choice} id={ID} checked={choice === this.state.selected} onChange={this.handleChange}></input>
                    {choice}
                    <br></br>
                </label>
            );
        });
        return(
            <div className="mcq-choiceList-container">
                {choiceList}
            </div>
        );
    }

    removeElement(){

        // TODO remove warning 
    }

    // TODO ADD edit button

    ElementHeader(){
        return(
            <React.Fragment>
                <div className="form-element-header">
                    {this.state.question}
                </div>
                <span className="remove-button element-button" onClick={this.removeElement}>Remove</span>
                <span className="edit-button element-button" onClick={this.editElement}>Edit</span>
            </React.Fragment>
            
        );
    }

    render(){
        return(
            <div className="form-element-container">
                <this.ElementHeader />
                <this.ChoiceList />
            </div>
        );
    }
}

export default MCQsingleUI;