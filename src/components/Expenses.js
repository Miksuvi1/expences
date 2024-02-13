import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
const Expenses = (props) => {
    const filterChangeHandler = (filteredYear) => {
        console.log('Year log in Expenses.js' + filteredYear)
    }
    return (
        <Card className='expenses'>
            <ExpensesFilter onChangeFilter={filterChangeHandler}/>
            
            <ExpenseItem expenseData={props.expenses[0]} />
            <ExpenseItem expenseData={props.expenses[1]} />
            
        </Card>
    )
}

export default Expenses