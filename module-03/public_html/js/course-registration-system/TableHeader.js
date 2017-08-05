function TableHeader(props) {
    var headers = props.columns.map((header) => {
        return <th>{header}</th>
    });
    
    return <tr>{headers}</tr>
}