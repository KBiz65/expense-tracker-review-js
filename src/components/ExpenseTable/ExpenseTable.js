import { Card, Table } from "react-bootstrap";
import ExpenseTableRow from "./ExpenseTableRow";

function ExpenseTable(props) {
  return (
    <Card>
      <h2>Expenses</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Desc</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.expenseList.map((expense) => (
            <ExpenseTableRow key={expense.id} expense={expense} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

export default ExpenseTable;
