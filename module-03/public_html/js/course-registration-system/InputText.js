function InputText(props) {
    var label = {
        display: 'block',
        clear: 'both'
    }
    
    var input = {
        display: 'block',
        width: '100%'
    }
    
    var div = {
        
    }
    
    return (
        <div stle={div}>
            <label style={label} for={props.name}>{props.label}:</label>
            <input style={input} type="text" name={props.name} onChange={props.action} />
        </div>
    );
}