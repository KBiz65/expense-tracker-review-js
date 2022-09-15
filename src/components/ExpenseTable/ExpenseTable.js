import { Card, Table } from "react-bootstrap";
import ExpenseTableRow from "./ExpenseTableRow";

function ExpenseTable(props) {
  return (
    <Card>
      <h2>Expense Table Here</h2>
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
          {props.items.map((expense) => (
            <ExpenseTableRow
              vendor={expense.vendor}
              date={expense.date}
              amount={expense.amount}
              desc={expense.desc}
            />
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

export default ExpenseTable;
