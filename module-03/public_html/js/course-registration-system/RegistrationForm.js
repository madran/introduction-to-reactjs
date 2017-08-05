class RegistrationForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            activity: '',
            restrictions: []
        }
        
        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setActivity = this.setActivity.bind(this);
        this.setRestrictions = this.setRestrictions.bind(this);
        this.submit = this.submit.bind(this);
    }
    
    setFirstName(event) {
        this.setState({firstname: event.target.value});
    }
    
    setLastName(event) {
        this.setState({lastname: event.target.value});
    }
    
    setActivity(event) {
        this.setState({activity: event.target.options[event.target.selectedIndex].value});
    }
    
    setRestrictions(event) {
        if(event.target.checked) {
            var restrictions = this.state.restrictions.slice();
            var restrictions = restrictions.concat(event.target.value);
            this.setState({restrictions: restrictions});
        } else {
            var restrictions = this.state.restrictions.slice();
            var index = restrictions.indexOf(event.target.value);
            restrictions.splice(index, 1);
            this.setState({restrictions: restrictions});
        }
    }
    
    submit(event) {
        event.preventDefault();
        this.props.register(this.state);
    }
    
    componentDidMount() {
        var select = document.getElementById('select');
        var selectedOption = select.options[select.selectedIndex].value;
        this.setState({activity: selectedOption});
    }
        
    render() {
        var activities = [
            {value: 'Science Lab', name: 'Science Lab', default: 0},
            {value: 'Swimming', name: 'Swimming', default: 0},
            {value: 'Cooking', name: 'Cooking', default: 1},
            {value: 'Painting', name: 'Painting', default: 0},
        ];

        var restrictions = [
            {value: 'a', name: 'dietaryRestrictions', label: 'Dietary Restrictions'},
            {value: 'b', name: 'physicalDisabilities', label: 'Physical Disabilities'},
            {value: 'c', name: 'medicalNeeds', label: 'Medical Needs'},
        ];
        
        var formCSS = {
            width: '200px'
        };
        
        var submitCSS = {
            width: '100%',
            height: '35px'
        };

        return (
            <form style={formCSS} action="#" method="post">
                <InputText name="firstName" label="First Name" action={this.setFirstName} />
                <InputText name="lastName" label="Last Name" action={this.setLastName} />
                <InputSelect name="activity" label="Select Svtivity" options={activities} action={this.setActivity} />
                <InputCheckboxList label="Check all that apply" list={restrictions} action={this.setRestrictions} />
                <button style={submitCSS} type="submit" onClick={this.submit}>Submit</button>
            </form>
        );
    }
}