class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() *100);
    }
    growl() {
        console.log('grrrr!!');
    }
}

// TODO: export tiger
module.exports = Tiger;