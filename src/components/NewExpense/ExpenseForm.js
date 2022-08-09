import React, { useEffect, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [time, setTime] = useState("");
  const [remaning, setRemaning] = useState("");
  const [line, setLine] = useState(1);
  const [lines, setLines] = useState([]);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const lineChangeHandler = (e) => {
    const val = e.target.value;
    setLine(parseInt(val));
  };

  useEffect(() => {
    fetch("http://localhost:4000/lines")
      .then((res) => res.json())
      .then((res) => {
        setLines(res);
      });
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      operation_name: enteredTitle,
      quantity: +enteredAmount,
      production_line_id: line,
      user_id: parseInt(localStorage.getItem("id")),
      timestamp: new Date(enteredDate),
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
            <label>Quantity</label>
            <input
              value={enteredAmount}
              type="number"
              min="1"
              step="1"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Production Line</label>
            <select onChange={lineChangeHandler}>
              {lines.map((l) => (
                <option value={l.id}>{l.name}</option>
              ))}
            </select>
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
