import { Card, Table } from "react-bootstrap";
import ExpenseTableRowOptions from "./ExpenseTableRowOptions";

function ExpenseTable() {
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
          <tr>
            <td>Bank of America</td>
            <td>Bill Pay</td>
            <td>$200.00</td>
            <td>9/7/22</td>
            <td>
              <ExpenseTableRowOptions />
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  );
}

export default ExpenseTable;
