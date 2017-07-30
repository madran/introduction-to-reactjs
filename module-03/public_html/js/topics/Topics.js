class Topics extends React.Component
{
    constructor(props) {
        super(props);
        this.state = { topics: null }
    }
    
    render() {
        return (
            <div id="topics">
                <NewTopicForm />
                <TopicList topics={ this.state.topics }/>
            </div>
        )
    }
}