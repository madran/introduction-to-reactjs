class CourseRegistrationSystem extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            registration: []
        };
    }
    
    render() {
        return (
            <div>
                <RegistrationForm />
                <RegisteredStudentsTable />
            </div>
        );
    }
}