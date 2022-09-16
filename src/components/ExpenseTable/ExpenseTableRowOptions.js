import { Dropdown, DropdownButton } from "react-bootstrap";

function ExpenseTableRowOptions(props) {
  const editBtnClickHandler = () => {
    props.onOptionBtnClick("edit");
  };

  const deleteBtnClickHandler = () => {
    props.onOptionBtnClick("delete");
  };

  return (
    <DropdownButton title="Options">
      <Dropdown.Item onClick={editBtnClickHandler}>Edit</Dropdown.Item>
      <Dropdown.Item onClick={deleteBtnClickHandler}>Delete</Dropdown.Item>
    </DropdownButton>
  );
}

export default ExpenseTableRowOptions;
