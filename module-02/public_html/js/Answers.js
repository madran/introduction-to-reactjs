class Answers extends React.Component {
    render() {
        var answers = [];
        for(var i = 0; i < 4; i++) {
            answers.push(
                <div>
                    <label for="answer">{this.props.answers.answers[i]}</label>
                    <input type="radio" name="answer" value={i} /><br />
                </div>
            );
        }
        
        return (
            <form action="#">
                {answers}
            </form>
        )
    }
}