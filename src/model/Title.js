class Title {

    constructor(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    static checkFormat(proposedTitle) {
        return true;
    }

}

module.exports = Title;