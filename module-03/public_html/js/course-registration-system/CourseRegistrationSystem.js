class CourseRegistrationSystem extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            registrations: []
        };
        
        this.register = this.register.bind(this);
        this.removeRegistration = this.removeRegistration.bind(this);
    }
    
    register(registration) {
        var registrations = this.state.registrations.concat(registration);
        this.setState({registrations: registrations});
    }
    
    removeRegistration(index) {
        var registrations = this.state.registrations.slice();
        registrations.splice(index, 1);
        this.setState({registrations: registrations});
    }
    
    render() {
        return (
            <div>
                <RegistrationForm register={this.register}/>
                <RegisteredStudentsTable registrations={this.state.registrations} removeRegistration={this.removeRegistration} />
            </div>
        );
    }
}