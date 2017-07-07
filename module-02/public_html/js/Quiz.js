class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            numberOfCorrectAnswers: 0,
            questions: [
                "1 + 1 =  ?", "2 + 2 =  ?", "3 + 3 =  ?", "4 + 4 =  ?", "5 + 5 =  ?"
            ],
            answers: [
                {
                    correctAnswer: 2,
                    answers: ["1", "2", "3", "4"]
                },
                {
                    correctAnswer: 1,
                    answers: ["4", "2", "6", "9"]
                },
                {
                    correctAnswer: 1,
                    answers: ["6", "3", "7", "9"]
                },
                {
                    correctAnswer: 3,
                    answers: ["12", "5", "8", "23"]
                },
                {
                    correctAnswer: 4,
                    answers: ["21", "11", "7", "10"]
                }
            ]
        }
        
        this.nextQuestion = this.nextQuestion.bind(this);
    }
    
    nextQuestion() {
        this.setState((prevState, props) => {
            if(prevState.currentQuestion < 5) {
                return { currentQuestion: prevState.currentQuestion + 1 }
            }
        });
        
        var answers = document.getElementsByName("answer");
        var answerValue = null;
        for(var i = 0; i <  answers.length; i++) {
            if(answers[i].checked) {
                answerValue = answers[i].value;
            }
        }
        if(this.state.correctAnwser < 5 && answerValue == this.state.answers[this.state.currentQuestion].correctAnwser - 1) {
            this.setState((prevState, props) => {
                return { numberOfCorrectAnswers: prevState.numberOfCorrectAnswers + 1 };
            })
        }
    }
    
    render() {
        var answers;
        if(this.state.currentQuestion < 5) {
            answers = <Answers answers={this.state.answers[this.state.currentQuestion]} />
        }
        return(
            <div id="quiz">
                <Question question={this.state.questions[this.state.currentQuestion]} />
                {answers}
                <Navigation nextQuestion={this.nextQuestion} />
                <Points numberOfCorrectAnswers={this.state.numberOfCorrectAnswers} />
            </div>
        )
    }
}