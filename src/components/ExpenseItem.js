import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
/*function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>Date</div>
            <div className="expense-item_description">
                <h2>Title</h2>
                <div className="expense-item_price">Amount</div>
            </div>
        </div>
    )
}
function ExpenseItem() {
    const date = new Date(2023, 9, 6)
    const title = 'New book'
    const price = 30.99

    return (
        <div className="expense-item">
            <div>{date.toString()}</div>
            <div>
                <h2>{title}</h2>
                <div>{price}</div>
            </div>
        </div>
    )
}

function ExpenseItem(props) {
    console.log(props)

    return (
        <div className="expense-item">
        <div>{props.expenseData.date.toString()}</div>
        <div>
            <h2>{props.expenseData.title}</h2>
            <div>{props.expenseData.price}</div>
        </div>
        </div>


    )
}*/

function ExpenseItem(props) {
  
   return (
    <div className='expense-item'>
    <ExpenseDate date = {props.expenseData.date}/>
    <div className='expense-item__description'>
    <h2>{props.expenseData.price}</h2>
    <div className='expense-item__price'>{props.expenseData.price}</div>
</div>
</div>
   )
}
export default ExpenseItem