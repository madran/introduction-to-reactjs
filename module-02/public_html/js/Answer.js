class Answer extends React.Component {
    render() {
        return (
            <div>
                <label for="question-0">{this.props.answers[0]}</label>
                <input type="radio" value="{this.props.correctAnser[0]}" /><br />
                
                <label for="question-1">{this.props.answers[1]}</label>
                <input type="radio" value="{this.props.correctAnser[1]}" /><br />
                
                <label for="question-2">{this.props.answers[2]}</label>
                <input type="radio" value="{this.props.correctAnser[3]}" /><br />
                
                <label for="question-3">{this.props.answers[3]}</label>
                <input type="radio" value="{this.props.correctAnser[3]}" /><br />
                
                <label for="question-4">{this.props.answers[4]}</label>
                <input type="radio" value="{this.props.correctAnser[4]}" />
            </div>
        )
    }
}