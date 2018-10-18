let field = new Field(),
    data = new Data(),
    app = new App();

function Core() {
    this.score = 0;
    this.win = 1;

    this.setScore = function setScore(target) {
        target.score += 1;
        console.log(target.score);
    }
}

//returns buttons 
Core.prototype.button = function button(id) {
    return document.getElementById(id);
}

//returns text
Core.prototype.textView = function textView(id) {
    return document.getElementById(id);
}

Core.prototype.getScore = function getScore(target) {
    return target.score;
}