import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

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
const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'));
    return expensesFromLS || [];
  })

    useEffect(() => {
      localStorage.setItem('expenses', JSON.stringify(expenses));
    }, [expenses]);

      const addExpenseHandler = (expense) => {
        setExpenses((previousExpenses) => {
          return [expense, ...previousExpenses]
        })
        setExpenses([expense, ...expenses])
      }
      
  return (
    <div className='App'>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
