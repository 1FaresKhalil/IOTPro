import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <h2 title="Time Taken To Complete">{props.time}H</h2>
          <h2 title="Remaining Amount">{props.rem}⛔</h2>
          <div title="Done Amount" className="expense-item__price">
            {props.amount} ✅
          </div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
