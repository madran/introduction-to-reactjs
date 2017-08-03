function InputSelect(props) {
    
    var options = props.options.map((option, index) => {
        return <option value={option.value}>{option.name}</option>
    });
    
    var labelCSS = {
        display: 'block',
        clear: 'both'
    }
    
    var selectCSS = {
        display: 'block'
    }
    
    return (
        <div>
            <label style={labelCSS} for={props.name}>{props.label}:</label>
            <select style={selectCSS} name={props.name}>
                {options}
            </select>
        </div>
    );
}