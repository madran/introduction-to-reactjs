function InputCheckboxList(props) {
    var list = props.list.map((item) => {
        return (
            <li>
                <label for={item.name}>{item.label}</label>
                <input type="checkbox" name={item.name} value={item.value} />
            </li>
        );
    });
    
    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    )
}