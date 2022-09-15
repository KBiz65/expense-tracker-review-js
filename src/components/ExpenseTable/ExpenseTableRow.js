import ExpenseTableRowOptions from "./ExpenseTableRowOptions";

function ExpenseTableRow() {
  return (
    <tr>
      <td>Bank of America</td>
      <td>Bill Pay</td>
      <td>$200.00</td>
      <td>9/7/22</td>
      <td>
        <ExpenseTableRowOptions />
      </td>
    </tr>
  );
}

export default ExpenseTableRow;
