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
                    correctAnser: [0,1,0,0],
                    answers: ["1", "2", "3", "4"]
                },
                {
                    correctAnser: [1,0,0,0],
                    answers: ["4", "2", "6", "9"]
                },
                {
                    correctAnser: [1,0,0,0],
                    answers: ["6", "3", "7", "9"]
                },
                {
                    correctAnser: [0,0,1,0],
                    answers: ["12", "5", "8", "23"]
                },
                {
                    correctAnser: [0,0,0,1],
                    answers: ["21", "11", "7", "10"]
                }
            ]
        }
    }
    
    render() {
        return(
            <div id="quiz">
                <Question question={this.state.questions[this.state.currentQuestion]}/>
                <Answers answers={this.state.answers[this.state.currentQuestion]}/>
                <Navigation />
                <Points numberOfCorrectAnswers={this.state.numberOfCorrectAnswers}/>
            </div>
        )
    }
}