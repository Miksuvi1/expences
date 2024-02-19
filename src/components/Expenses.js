import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2024')

    console.log(filteredYear);

    const filterChangeHandler = (year) => {
        console.log('Year data in Expense.js ' + year)
        setFilteredYear(year)
    }
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear() == filteredYear
    })

    return (
        <Card className='expenses'>
            <ExpensesFilter  selected={filteredYear} onChangeFilter=
            {filterChangeHandler}/>
            {
                filteredExpenses.map((expense) => {
                    return <ExpenseItem expenseData={expense} key={expense.id}/>
                })
            }
           
            
        </Card>
    )
}

export default Expenses