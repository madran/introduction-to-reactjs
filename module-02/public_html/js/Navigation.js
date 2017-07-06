class Navigation extends React.Component {
    render() {
        return <button onClick={() => { this.props.nextQuestion() }}>Next</button>
    }
}