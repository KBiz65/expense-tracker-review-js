import ExpenseTableRowOptions from "./ExpenseTableRowOptions";

function ExpenseTableRow(props) {
  return (
    <tr>
      <td>{props.vendor}</td>
      <td>{props.desc}</td>
      <td>{props.amount}</td>
      <td>{props.date}</td>
      <td>
        <ExpenseTableRowOptions />
      </td>
    </tr>
  );
}

export default ExpenseTableRow;
