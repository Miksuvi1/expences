import logo from './logo.svg';
/*import ExpenseItem from './components/ExpenseItem.js'*/
import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const DYMMY_EXPENSES = [
    {
  id: 'id1',
  date: new Date(2023, 9, 6),
  title: 'New book',
  price: 30.99
    },
    {
      id: 'id2',
      date: new Date(2023, 9, 6),
      title: 'New jeans',
      price: 99.99
        },
        {
          id: 'id3',
          date: new Date(2024, 0, 25),
          title: 'New bag',
          price: 139.99
        },
      ]
      const addExpenseHandler = (expense) => {
        console.log('In App.js')
        console.log(expense)
      }
      
  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={DYMMY_EXPENSES}/>
    </div>
  );
}

export default App;
