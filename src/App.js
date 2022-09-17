import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable/ExpenseTable";
import EditExpenseForm from "./components/EditExpenseForm/EditExpenseForm";
import "./App.css";

const data = [];

// get all local storage data as array
for (const id of Object.keys(localStorage)) {
  const props = JSON.parse(localStorage.getItem(id));
  data.push({ id, ...props });
}

function App() {
  const [expenses, setExpenses] = useState(data);
  const [expenseToEdit, setExpenseToEdit] = useState("");

  const [show, setShow] = useState(false);
  const openEditFormModal = () => setShow(true);
  const closeEditFormModal = () => setShow(false);

  const newExpenseDataHandler = (id, newExpenseData) => {
    localStorage.setItem(id, JSON.stringify(newExpenseData));
    setExpenses((prevExpenses) => {
      return [{ id, ...newExpenseData }, ...prevExpenses];
    });
  };

  const optionBtnClickHandler = (id, option) => {
    if (option === "delete") {
      localStorage.removeItem(id);
      setExpenses((prevExpenses) => {
        return prevExpenses.filter((expense) => expense.id !== id);
      });
    } else if (option === "edit") {
      // set data source of edit form component
      setExpenseToEdit(expenses.find((elem) => elem.id === id));
      openEditFormModal();
    }
  };

  const editExpenseDataHandler = (id, editedExpenseData) => {
    const index = expenses.findIndex((elem) => elem.id === id);
    localStorage.setItem(id, JSON.stringify(editedExpenseData));
    expenses[index] = { id, ...editedExpenseData };
    closeEditFormModal();
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Expense Tracker</h1>
          <ExpenseForm onNewExpenseSubmit={newExpenseDataHandler} />
          <ExpenseTable
            onOptionBtnClick={optionBtnClickHandler}
            expenseList={expenses}
          />
        </Col>
      </Row>
      <Modal size="lg" show={show} onHide={closeEditFormModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditExpenseForm
            data={expenseToEdit}
            onEditExpenseSubmit={editExpenseDataHandler}
          />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
