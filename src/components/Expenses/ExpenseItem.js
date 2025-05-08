import "./EpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({date}) {

    return (
      <Card className="expense-item">
          <ExpenseDate date={date} />
          <div className="expense-item__description">
              <h2>Car Insurance</h2>
              <div className="expense-item__price">$300</div>
          </div>
      </Card>
    );
}

export default ExpenseItem;