    
function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

