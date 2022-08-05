import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterChangeHandler = (year) => {
    setSelectedYear(year);
  };
  const filteredItems = props.expenses.filter((expense) => {
    return expense.date.getFullYear() === Number(selectedYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredItems} />
        <ExpensesList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
