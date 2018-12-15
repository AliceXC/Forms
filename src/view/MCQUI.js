import React, {Component} from 'react';
import "../css/MCQUI.css";
import "../css/form-element.css";

class MCQUI extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            id: props.id,
            type: 'single',
            counter: 0,
            choices : [
                // {id:1, input: "strstrstr", code: <this.Choice key={bla} id={bla} /> }
            ],
        };
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.removeElement = this.removeElement.bind(this);
        this.ElementBody = this.ElementBody.bind(this);
        this.ChoiceType = this.ChoiceType.bind(this);
        this.handleAddChoice = this.handleAddChoice.bind(this);
        this.Choice = this.Choice.bind(this);
        this.printChoices = this.printChoices.bind(this);
    }

    // handle the type change of the MCQ: single vs multiple
    async handleTypeChange(event) {
        let promise = new Promise((resolve)=>{
            this.setState({
                type: event.target.value
            });
            resolve();
        })
        await promise;
    }

    // remove the current form element, in this case, the current MCQ element
    removeElement(){
        // TODO alert() if want to remove the current form element 
        this.props.handleDelete(this.state.id);
    }

    // ChoiceType jsx. 
    ChoiceType(){
        return(
            <div className="MCQ-type-container">
                <label htmlFor="single-choice">
                    <input type="radio" name="MCQ-type" value="single" id="single-choice" 
                        checked={this.state.type === "single"} onChange={this.handleTypeChange}></input>
                    Single choice
                </label>
                <label htmlFor="multiple-choice">
                    <input type="radio" name="MCQ-type" value="multiple" id="multiple-choice"
                        checked={this.state.type === "multiple"} onChange={this.handleTypeChange}></input>
                    Multiple choices
                </label>
            </div> 
        );
    }

    ElementBody(){
        return(
            <div className="form-element-body">
                    <div className="form-element-description">
                        <textarea className="MCQ-description" rows="4" maxLength="300" placeholder="Please enter the question description."></textarea>
                    </div>

                    <this.ChoiceType />

                    {/* TODO replace all buttons with customized div*/}
                    <div className="form-MCQ-choicelist">
                        <button className="add-choice-button" onClick={this.handleAddChoice}>Add a choice</button>
                        {/* TODO alert(no more than 10 choices) have a span hidden or display*/}
                        {
                            this.state.choices.map((choice)=>{
                                return choice.code
                            })
                        }
                    </div>
            </div> 
        );
    }

    // triggered by the remove button of each choice. 
    // will remove the corresponding choice from the array.
    // choice={id,input,code}, then just remove choice from choices where choice.id === pID
    async removeChoice(pID){
        let promise = new Promise((resolve)=>{
            this.setState((prevState) => ({
                choices: prevState.choices.filter(choice => choice.id !== pID)
            }))
            resolve();
        });
        await promise;
    }

    // for testing purpose. print all choices
    printChoices(){
        this.state.choices.map((choice)=>{
            console.log(choice.id);
        });
    }

    // Choice jsx. Composite every unique Choice html component.
    Choice(props){
        let ID = "MCQ-"+this.state.id+"-choice-"+props.id;
        return(
            <div className="MCQ-choice" id={ID}>
                {"Choice " + props.id +": "}
                <input className="MCQ-choice-input" type="text"></input>
                <input className="MCQ-choice-remove" type="button" value="remove" onClick={this.removeChoice.bind(this,props.id)}></input>
            </div>
        );
    }

    // create a new choice and add it to the array
    async handleAddChoice(){
        let size = this.state.choices.length;
        if( size < 10){
            let promise = new Promise((resolve)=>{
                this.setState((prevState)=>({
                    counter: prevState.counter+1
                }));
                resolve();
            });
            await promise;
            
            let ctr = this.state.counter;
            let jsx = <this.Choice key={ctr} id={ctr} />
            let newChoice = {id: ctr, input: "", code:jsx};
            promise = new Promise((resolve)=>{
                this.setState({
                    choices: [...this.state.choices,newChoice]
                });
                resolve();
            });
            await promise;
        }
    }

    // MARK TODO only update choice input when submit the form

    render(){
        return(
            <div className="form-element-container">
                <span className="element-type">MCQ</span>
                <this.ElementBody />
                <span className="remove-button element-button" onClick={this.removeElement}>Remove</span>
            </div>
        );
    }
}

export default MCQUI;