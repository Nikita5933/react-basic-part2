import './ExpenseForm.css'
import {useState} from "react";

export default function ExpenseForm(props) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [userInput, setUserInput] = useState({
        title: "",
        amount: "",
        date: ""
    })

    function titleChangeHandler(e) {
        setTitle(e.target.value);
       // setUserInput({
       //     ...userInput,
       //     title: e.target.value,
       // })
       //  setUserInput((prevValue) => {
       //      return {...userInput, title: e.target.value}
       //  })
    }
    function amountChangeHandler(e) {
        setAmount(e.target.value);
       // setUserInput({
       //     ...userInput,
       //     amount: e.target.value,
       // })
       //  setUserInput((prevValue) => {
       //      return {...userInput, amount: e.target.value}
       //  })
    }

    function dateChangeHandler(e) {
        setDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     date: e.target.value,
        // })
        // setUserInput((prevValue) => {
        //     return {...userInput, date: e.target.value}
        // })
    }

    // const inputChangeHandler = (id, value) => {
    //     if (id === 'title') {
    //         setTitle(value);
    //     } else if (id === 'amount') {
    //         setAmount(value);
    //     } else {
    //         setDate(value);
    //     }
    // }

    function submitHandler(e) {
        e.preventDefault();
        const expenseData = {
            title,
            amount,
            date: new Date(date),
        }
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
        console.log(expenseData);
    }
    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={title} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2025-01-01" max="2026-01-01" value={date} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>)
}