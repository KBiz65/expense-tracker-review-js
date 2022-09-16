import ExpenseTableRowOptions from "./ExpenseTableRowOptions";

function ExpenseTableRow(props) {
  const optionBtnClickHandler = (option) => {
    props.onOptionBtnClick(props.expense.id, option);
  };

  return (
    <tr>
      <td>{props.expense.vendor}</td>
      <td>{props.expense.desc}</td>
      <td>{props.expense.amount}</td>
      <td>{props.expense.date}</td>
      <td>
        <ExpenseTableRowOptions onOptionBtnClick={optionBtnClickHandler} />
      </td>
    </tr>
  );
}

export default ExpenseTableRow;
