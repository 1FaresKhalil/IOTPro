import React, { useContext, useState } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import AuthContext from "../../store/auth-context";
import NewExpense from "../NewExpense/NewExpense";
import Expenses from "../Expenses/Expenses";

const dummyExpenses = [
  {
    id: "e1",
    title: "Skrit ",
    amount: 94,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Shoes", amount: 799, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "T-shirt",
    amount: 294,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Shrit",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const Home = (props) => {
  const authCtx = useContext(AuthContext);
  const [expenses, setExpenses] = useState(dummyExpenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

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
