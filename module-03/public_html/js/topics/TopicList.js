class TopicList extends React.Component
{
    constructor(props) {
        super(props);
    }
    
    render() {
        var topics = this.props.topics.map((item) => {
            return <li>{item}</li>
        });
        return (
            <ol>
                {topics}
            </ol>
        );
    }
}