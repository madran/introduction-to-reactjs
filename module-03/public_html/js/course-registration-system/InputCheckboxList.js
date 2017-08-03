function InputCheckboxList(props) {
    var listCSS = {
        margin: 0,
        padding: 0,
        listStyleType: 'none'
    }
    
    var list = props.list.map((item) => {
        return (
            <li>
                <input type="checkbox" name={item.name} value={item.value} />
                <label for={item.name}>{item.label}</label>
            </li>
        );
    });
    
    return (
        <div>
            <div>{props.label}:</div>
            <ul style={listCSS}>
                {list}
            </ul>
        </div>
    )
}