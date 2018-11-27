var manager = null;

class FormManager {

    constructor() {
        this.title = null;
    }

    static get() {
        if(manager === null) {
            manager = new FormManager();
        }
        return manager;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

}

module.exports = FormManager;