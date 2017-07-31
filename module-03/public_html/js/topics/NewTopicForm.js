class NewTopicForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { topic: '' }
        this.setTopic = this.setTopic.bind(this);
        this.submit = this.submit.bind(this);
    }
    
    setTopic(event) {
        this.setState({topic: event.target.value});
    }
    
    submit() {
        this.props.newTopicAction(this.state.topic);
    }
    
    render() {
        return (
            <form action="#">
                <input type="text" value={this.state.topic} onChange={this.setTopic} />
                <button type="submit" onClick={this.submit}>Dodaj</button>
            </form>
        )
    }
}