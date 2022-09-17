import { Card, Table } from "react-bootstrap";
import ExpenseTableRow from "./ExpenseTableRow";

function ExpenseTable(props) {
  const optionBtnClickHandler = (id, option) => {
    props.onOptionBtnClick(id, option);
  };

  return (
    <Card>
      <h2>Expenses</h2>
      <Table variant="dark" striped bordered hover>
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
            <ExpenseTableRow
              key={expense.id}
              expense={expense}
              onOptionBtnClick={optionBtnClickHandler}
            />
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

export default ExpenseTable;
