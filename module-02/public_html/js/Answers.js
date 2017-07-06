class Answers extends React.Component {
    render() {
        return (
            <div>
                <input type="radio" value="{this.props.answers.correctAnser[0]}" /><br />
                <label for="question-0">{this.props.answers.answers[0]}</label>
                
                <input type="radio" value="{this.props.answers.correctAnser[1]}" /><br />
                <label for="question-1">{this.props.answers.answers[1]}</label>
                
                <input type="radio" value="{this.props.answers.correctAnser[3]}" /><br />
                <label for="question-2">{this.props.answers.answers[2]}</label>
                
                <input type="radio" value="{this.props.answers.correctAnser[3]}" /><br />
                <label for="question-3">{this.props.answers.answers[3]}</label>
                
                <input type="radio" value="{this.props.answers.correctAnser[4]}" />
                <label for="question-4">{this.props.answers.answers[4]}</label>
            </div>
        )
    }
}