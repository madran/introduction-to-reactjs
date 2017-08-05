class RegisteredStudentsTable extends React.Component
{
    constructor(props) {
        super(props);
    }
    
    render() {
        var columnHeaders = [
            "Remove", "FirstName", "LastName", "Activity", "Restrictions"
        ];
        var rows = this.props.registrations.map((registration) => {
            return <TableRow data={registration} />;
        });
        
        return (
            <table>
                <TableHeader columns={columnHeaders} />
                {rows}
            </table>
        );
    }
}