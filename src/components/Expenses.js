import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
const Expenses = (props) => {
    const filterChangeHandler = (filteredYear) => {
        console.log('Year log in Expenses.js' + filteredYear)
    }
    props.expenses.map((expense) => {
        console.log(expense)
    })
    console.log(props);
    return (
        <Card className='expenses'>
            <ExpensesFilter onChangeFilter={filterChangeHandler}/>
            {
                props.expenses.map((expense) => {
                    return <ExpenseItem expenseData={expense} key={expense.id}/>
                })
            }
           
            
        </Card>
    )
}

export default Expenses