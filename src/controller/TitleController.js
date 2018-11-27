const Title = require("../model/Title");
const manager = require("../manager/FormManager").get();

class TitleController {

    static createTitle(title) {
        // TODO check title format and handle incorrect format
        
        if(Title.checkFormat(title)) {
            let t = new Title(title);
            manager.setTitle(t);
        } else {

            // Handle case
        }
    }

    static getTitle() {
        return manager.getTitle();
    }

}

module.exports = TitleController;