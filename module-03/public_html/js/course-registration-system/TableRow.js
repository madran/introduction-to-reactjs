function TableRow(props) {
    return (
        <tr>
            <td></td>
            <td>{props.data.firstname}</td>
            <td>{props.data.lastname}</td>
            <td>{props.data.activity}</td>
            <td>{props.data.restrictions}</td>
        </tr>
    )
}