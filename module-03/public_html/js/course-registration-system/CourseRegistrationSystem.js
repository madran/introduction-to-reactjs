class CourseRegistrationSystem extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            registrations: []
        };
        
        this.register = this.register.bind(this);
    }
    
    register(registration) {
        var registrations = this.state.registrations.concat(registration);
        this.setState({registrations: registrations});
    }
    
    render() {
        return (
            <div>
                <RegistrationForm register={this.register}/>
                <RegisteredStudentsTable registrations={this.state.registrations} />
            </div>
        );
    }
}