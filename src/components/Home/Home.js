import React, { useContext, useEffect, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import AuthContext from "../../store/auth-context";
import NewExpense from "../NewExpense/NewExpense";
import Expenses from "../Expenses/Expenses";

const dummyExpenses = [];

const Home = (props) => {
  const authCtx = useContext(AuthContext);
  const [expenses, setExpenses] = useState(dummyExpenses);
  const addExpenseHandler = (expense) => {
    fetch("http://localhost:4000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    })
      .then((res) => res.json())
      .then((data) => {
        setExpenses((prevState) => {
          const newExpense = {
            id: data.id,
            title: data.operation_name,
            amount: data.quantity,
            date: data.timestamp,
          };
          return [...prevState, newExpense];
        });
      });
  };

  useEffect(() => {
    const user_id = parseInt(localStorage.getItem("id"));

    fetch("http://localhost:4000/transactions?user_id=" + user_id)
      .then((res) => res.json())
      .then((data) => {
        const mappedTransactions = data.map((t) => {
          return {
            id: t.id,
            title: t.operation_name,
            amount: t.quantity,
            date: new Date(t.timestamp),
          };
        });

        setExpenses(mappedTransactions);
      });
  }, []);

  return (
    <>
      <Card className={classes.home}>
        <h1>Welcome {localStorage.getItem("name")}</h1>
      </Card>

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default Home;
