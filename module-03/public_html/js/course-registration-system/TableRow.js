function TableRow(props) {
    return (
        <tr>
            <td><button onClick={() => {props.removeRegistration(props.index)}}>X</button></td>
            <td>{props.data.firstname}</td>
            <td>{props.data.lastname}</td>
            <td>{props.data.activity}</td>
            <td>{props.data.restrictions}</td>
        </tr>
    )
}