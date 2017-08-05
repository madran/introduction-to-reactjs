class RegisteredStudentsTable extends React.Component
{
    render() {
        var columnHeaders = [
            "Remove", "FirstName", "LastName", "Activity", "Restrictions"
        ];
        
        return (
            <table>
                <TableHeader columns={columnHeaders} />
                <TableRow data={[1,2,3,4,5]}/>
            </table>
        );
    }
}