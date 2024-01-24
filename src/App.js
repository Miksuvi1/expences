import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
import './App.css';
import ExpenseItem from './components/ExpenseItem'

function App() {
  return (
    <div className="App">
      <ExpenseItem/>
    </div>
  );
}

function App() {
  const expenses = {
    {
  const date = new Date(2023, 9, 6)
  const title = 'New book'
  const price = 30.99
    }
    {
      const date = new Date(2023, 9, 6)
      const title = 'New jeans'
      const price = 99.99
        }
}
  return (
    <div className='App'>
      <ExpenseItem
     expenseData={expenses[0]}/>
      <ExpenseItem
     expenseData={expenses[1]}/>

    </div>
  );
}

export default App;
