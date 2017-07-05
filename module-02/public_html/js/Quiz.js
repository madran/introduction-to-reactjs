class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state.currentQuestion = 1;
        this.state.questions = [
            "1 + 1 =  ?", "2 + 2 =  ?", "3 + 3 =  ?", "4 + 4 =  ?", "5 + 5 =  ?"
        ];
        this.state.answers = [
            {
                correctAnser: 2,
                answers: [
                    "1", "2", "3", "4"
                ]
            },
            {
                correctAnser: 1,
                answers: [
                    "4", "2", "6", "9"
                ]
            },
            {
                correctAnser: 1,
                answers: [
                    "6", "3", "7", "9"
                ]
            },
            {
                correctAnser: 3,
                answers: [
                    "12", "5", "8", "23"
                ]
            },
            {
                correctAnser: 4,
                answers: [
                    "21", "11", "7", "10"
                ]
            }
        ];
    }
    
    render() {
        return(
            <div id="quiz">
                <Question question="{this.state.questions[this.state.currentQuestion]}"/>
                <Answers answers="{this.state.answers[this.state.currentQuestion]}"/>
                <Navigation />
                <Points />
            </div>
        )
    }
}