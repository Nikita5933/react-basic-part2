import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const expenses = [{
        date: new Date(2025, 2, 1),
        title: 'Expense 1',
    }]
  return (
    <div>
      <NewExpense />
        <Expenses>
            <ExpenseItem date={expenses[0].date} title={expenses[0].title} />
            <ExpenseItem date={expenses[0].date} title={expenses[0].title} />
        </Expenses>
    </div>
  );
}

export default App;
