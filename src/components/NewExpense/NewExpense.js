import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
    function saveExpenseHandler(data) {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);

    }
    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>)
}