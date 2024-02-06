import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
    const expenses = [
        {
            date: new Date(2024, 0, 19),
            title: 'New Book', 
            price: 99.99
        },
        {
            date: new Date(2024, 0, 19),
            title: 'New Jeans',
            price: 99.99
        },
    ]
    const addExpenseHandler = (expense) => {
        console.log('In App.js')
        console.log(expense)
    }
    return (
        <div className='App'>
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;