import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
import {useState} from 'react';

const NewExpense = (props) => {
    const [showExpenseForm, toggleShowExpenseForm] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random(). toString()
        }
        props.onAddExpense(expenseData)
        toggleShowExpenseForm(false)
    }
    console.log(NewExpense);


    const showAddNewForm = () => {
        toggleShowExpenseForm(true)
    }
    const showAddNewButton = () => {
        toggleShowExpenseForm(false)
    }

    
    console.log();

    return(
        <div className="new-expense">
            {!showExpenseForm && (
                <button type="submit" onClick={showAddNewForm}>
                    Add New Expense
                </button>
            )}

            {showExpenseForm && <ExpenseForm onCancel= {showAddNewButton} onSaveExpenseData = {saveExpenseDataHandler}/>}
        </div>
    )
}
export default NewExpense