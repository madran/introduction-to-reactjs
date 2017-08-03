function InputSelect(props) {
    
    var options = props.options.map((option, index) => {
        return <option value={option.value} selected={option.default === 1 ? 'selected' : ''}>{option.name}</option>
    });
    
    var labelCSS = {
        display: 'block',
        clear: 'both'
    }
    
    var selectCSS = {
        display: 'block',
        width: '100%'
    }
    
    return (
        <div>
            <label style={labelCSS} for={props.name}>{props.label}:</label>
            <select id="select" style={selectCSS} name={props.name} onChange={props.action}d>
                {options}
            </select>
        </div>
    );
}