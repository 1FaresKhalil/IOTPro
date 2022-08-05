import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [clicked, setClicked] = useState(false);
  const showFormHandler = () => {
    setClicked(true);
  };
  const cancelFormHandler = () => {
    setClicked(false);
  };
  const saveExpenseHandler = (expense) => {
    const expenses = { ...expense, id: Math.random() };
    props.onAddExpense(expenses);
    setClicked(false);
  };
  return (
    <div className="new-expense">
      {!clicked && <button onClick={showFormHandler}>Add Finished Task</button>}
      {clicked && (
        <ExpenseForm
          onSaveForm={cancelFormHandler}
          onSaveExpense={saveExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
