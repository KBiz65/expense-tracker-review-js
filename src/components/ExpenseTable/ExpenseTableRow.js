import ExpenseTableRowOptions from "./ExpenseTableRowOptions";

function ExpenseTableRow(props) {
  return (
    <tr>
      <td>{props.expense.vendor}</td>
      <td>{props.expense.desc}</td>
      <td>{props.expense.amount}</td>
      <td>{props.expense.date}</td>
      <td>
        <ExpenseTableRowOptions />
      </td>
    </tr>
  );
}

export default ExpenseTableRow;
