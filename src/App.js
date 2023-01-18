import './components/Expenses/Expenses.css'
import './App.css';
import Expenses from "./components/Expenses/Expenses";

import ExpenseItem from "./components/Expenses/ExpenseItem";

const App = () => {
    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title: 'new book',
            price: 30.99
        },
        {
            date: new Date(2023, 3, 15),
            title: 'new jeans',
            price: '420'
        }
    ]



  return (
        <div className="App">

        <Expenses expenseData={expenses}></Expenses>




    </div>
  );
}

export default App;
