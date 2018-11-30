// require react
// create a ui component for the title
// handle onclick event {create title; ...}
import React, { Component } from 'react';
import '../css/main.css'

class TitleUI extends Component {
    // TODO add a placeholder "Title"
    render() {
        return (
            <div className="ui-container" id="form-block">
                <p className="form-description" id="description-title">Please enter your title below.</p>
                <div className="form-input" id="input-title" onKeyDown={TitleUI.checkLength} contentEditable="true" onBlur={TitleUI.validateTitle}></div>
            </div>
            
        );
    }

    // e for event: the default event that triggers the function. e.g, onKeyDown
    static checkLength(e) {
        // set up max length of title input and prevent entering newlines 
        if((document.querySelector("div#input-title").textContent.length > 50 && e.keyCode !== 8)|| e.keyCode === 13) {
            e.preventDefault(); // prevent event from happening
        }
    }

    // TODO migrate CheckLength and validateTitle to TitleController.js
    static validateTitle(){
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
}

export default TitleUI;