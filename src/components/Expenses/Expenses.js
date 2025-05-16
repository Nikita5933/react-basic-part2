import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

export default function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState(2022);
    function filterChangeHandler(year) {
        setFilteredYear(year);
    }
    return (
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.children}
        </div>
    )
}