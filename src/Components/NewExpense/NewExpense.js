import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    showForm();
  };

  const hideForm = () => {
    setIsFormVisible(false);
  }
  
  const showForm = () => {
    setIsFormVisible(true);
  }

  return (
    <div className="new-expense">
      {!isFormVisible && (
        <button onClick={showForm}>Add New Expense</button>
      )}
      {isFormVisible && (
        <ExpenseForm hideForm={hideForm} onSaveExpenseData={saveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
