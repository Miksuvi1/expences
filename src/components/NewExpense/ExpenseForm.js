import './ExpenseForm.css'
import { useState, useRef } from 'react'
import Error from '../UI/Error'



const ExpenseForm = (props) => {
    const [error, setError] = useState(null)
    
    /*const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')*/

    const titleInputRef = useRef()
    const amountInputRef = useRef()
    const dateInputRef = useRef()
    
   
 /*   const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }*/
    const submitHandler = (event) => {
    

        const enteredTitle = titleInputRef.current.value
        const enteredAmount = amountInputRef.current.value
        const enteredDate = dateInputRef.current.value

        event.preventDefault()

        if(enteredTitle.trim().length == 0 || enteredAmount.trim().length == 0 ||
        enteredDate.trim().length == 0) {
            setError ({
                title: 'Invalid input',
                message: 'Please enter a valid title or amount or date (non-empty values)'
            })
            return
        }



        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        props.onCancel()
        titleInputRef.current.value = ''
        amountInputRef.current.value = ''
        dateInputRef.current.value = ''
       /*setEnteredTitle('')
       setEnteredAmount('')
       setEnteredDate('')*/
    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                    id="title"
                    ref={titleInputRef}
                    />

                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type="number" min="0.01" step="0.01" 
                    id="amount"
                    ref={amountInputRef}
                    />
                </div>
                <div className="new-expense__control">
                    <label>date</label>
                    <input type="date" min="2023-01-01" max="2025-01-31" 
                    id="date"
                    ref={dateInputRef}
                    />
                </div>
                
            
                <div className='new-expense__actions'>
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
                </div>
        </form>
    )
}


export default ExpenseForm