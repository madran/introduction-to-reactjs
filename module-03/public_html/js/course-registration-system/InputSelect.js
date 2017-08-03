function InputSelect(props) {
    
    var options = props.options.map((option, index) => {
        return <option value={option.val}>{option.desc}</option>
    });
    
    var label = {
        display: 'block',
        clear: 'both'
    }
    
    var select = {
        display: 'block'
    }
    
    return (
        <div>
            <label style={label} for={props.name}>{props.label}:</label>
            <select style={select} name={props.name}>
                {options}
            </select>
        </div>
    );
}