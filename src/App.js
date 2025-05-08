import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

function App() {
    const expenses = [{
        date: new Date(2025, 2, 1),
    }]
  return (
    <div>
      <h2>Let's get started!</h2>
        <Expenses>
            <ExpenseItem date={expenses[0].date} />
            <ExpenseItem date={expenses[0].date} />
        </Expenses>
    </div>
  );
}

export default App;
