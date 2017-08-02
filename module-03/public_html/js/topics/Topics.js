class Topics extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { topics: [] };
        this.newTopic = this.newTopic.bind(this);
        this.voteUp = this.voteUp.bind(this);
        this.voteDown = this.voteDown.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
    }
    
    newTopic(title) {
        if(title !== '') {
            var topics = this.state.topics.concat({title: title, votes: 0});
            this.setState({topics: topics});
        }
    }
    
    deleteTopic(index) {
        var topics = this.state.topics;
        topics.splice(index, 1);
        this.setState({topics: topics});
    }
    
    voteUp(index) {
        var topics = this.state.topics;
        topics[index].votes = topics[index].votes + 1;
        this.setState({topics: topics});
    }
    
    voteDown(index) {
        var topics = this.state.topics;
        topics[index].votes = topics[index].votes - 1;
        this.setState({topics: topics});
    }
    
    render() {
        return (
            <div id="topics">
                <NewTopicForm newTopicAction={ this.newTopic }/>
                <TopicList topics={ this.state.topics } voteUp={ this.voteUp } voteDown={ this.voteDown } deleteTopic={ this.deleteTopic }/>
            </div>
        )
    }
}