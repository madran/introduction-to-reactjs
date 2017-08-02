class TopicList extends React.Component
{
    constructor(props) {
        super(props);
    }
    
    render() {
        var topics = this.props.topics.map((topic, index) => {
            return (
                <li key={index}>
                    <button onClick={() => this.props.deleteTopic(index)}>X</button>
                    <div>{topic.title}</div>
                    <button onClick={() => this.props.voteUp(index)}>+</button>
                    <div>{topic.votes}</div>
                    <button onClick={() => this.props.voteDown(index)}>-</button>
                </li>
            );
        });
        return (
            <ol>
                {topics}
            </ol>
        );
    }
}