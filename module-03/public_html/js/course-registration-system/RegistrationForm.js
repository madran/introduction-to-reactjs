class RegistrationForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            activity: '',
            restrictions: ''
        }
    }
        
    render() {
        var activities = [
            {value: 'Science Lab', name: 'Science Lab'},
            {value: 'Swimming', name: 'Swimming'},
            {value: 'Cooking', name: 'Cooking'},
            {value: 'Painting', name: 'Painting'},
        ];

        var restrictions = [
            {value: 'a', name: 'dietaryRestrictions', label: 'Dietary Restrictions'},
            {value: 'b', name: 'physicalDisabilities', label: 'Physical Disabilities'},
            {value: 'c', name: 'medicalNeeds', label: 'Medical Needs'},
        ];
        
        var formCSS = {
            width: '200px'
        }

        return (
            <form style={formCSS} action="#" method="post">
                <InputText name="firstName" label="First Name" />
                <InputText name="lastName" label="Last Name" />
                <InputSelect name="activity" label="Select Svtivity" options={activities} />
                <InputCheckboxList label="Check all that apply" list={restrictions} />
            </form>
        );
    }
}