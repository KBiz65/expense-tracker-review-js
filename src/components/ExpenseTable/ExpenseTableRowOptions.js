import { Dropdown, DropdownButton } from "react-bootstrap";

function ExpenseTableRowOptions() {
  return (
    <DropdownButton title="Options">
      <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
      <Dropdown.Item eventKey="2">Delete</Dropdown.Item>
    </DropdownButton>
  );
}

export default ExpenseTableRowOptions;
