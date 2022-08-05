import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [time, setTime] = useState("");
  const [remaning, setRemaning] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const timeChangeHandler = (event) => {
    setTime(event.target.value);
  };
  const remaningChangeHandler = (event) => {
    setRemaning(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      time: time,
      remaning: remaning,
    };
    props.onSaveExpense(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setTime("");
    setRemaning("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              value={enteredTitle}
              type="text"
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Time Taken</label>
            <input
              value={time}
              type="number"
              min="0.01"
              step="0.01"
              onChange={timeChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Remaining Amount</label>
            <input
              value={remaning}
              type="number"
              min="0.01"
              step="0.01"
              onChange={remaningChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Done Amount</label>
            <input
              value={enteredAmount}
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={enteredDate}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button
            style={{ marginBottom: "8px" }}
            onClick={props.cancelFormHandler}
          >
            Cancel
          </button>
          <button type="submit">Add Finished Task</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
