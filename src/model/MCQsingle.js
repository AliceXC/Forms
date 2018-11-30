// MCQsingle: multiple choice question one answer
class MCQsingle{

    constructor(pDescription){
        this.description = pDescription;
        this.choices = [];
    }
    static addChoice(pChoice){
        this.choices.push(pChoice);
    }
    static getDescription(){
        return this.description;
    }
    static getChoices(){
        return this.choices;
    }
}

module.exports = MCQsingle;