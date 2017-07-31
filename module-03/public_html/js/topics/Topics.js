class Topics extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { topics: [] }
        this.newTopic = this.newTopic.bind(this);
    }
    
    newTopic(title) {
        var topics = this.state.topics.concat(title);
        this.setState({topics: topics});
    }
    
    render() {
        return (
            <div id="topics">
                <NewTopicForm newTopicAction={ this.newTopic }/>
                <TopicList topics={ this.state.topics }/>
            </div>
        )
    }
}