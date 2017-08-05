function TableRow(props) {
    var data = props.data.map((data) => {
        return <td>{data}</td>
    });
    
    return <tr>{data}</tr>
}