class RegisteredStudentsTable extends React.Component
{
    constructor(props) {
        super(props);
    }
    
    render() {
        var columnHeaders = [
            "Remove", "FirstName", "LastName", "Activity", "Restrictions"
        ];
        var rows = this.props.registrations.map((registration, index) => {
            return <TableRow data={registration} index={index} removeRegistration={this.props.removeRegistration} />;
        });
        
        return (
            <table>
                <TableHeader columns={columnHeaders} />
                {rows}
            </table>
        );
    }
}