import './components/Expenses/Expenses.css'
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

import ExpenseItem from "./components/Expenses/ExpenseItem";
import expenseDate from "./components/Expenses/ExpenseDate";
import expensesFilter from "./components/Expenses/ExpensesFilter";

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


    const filter = expensesFilter


    const addExpenseHandler = (expense) => {
        console.log('in app js')
        console.log(expense)

    }





  return (
        <div className="App">
        <NewExpense onAddExpense={addExpenseHandler} ></NewExpense>
        <Expenses expenseData={expenses} onAddFilter={filter}></Expenses>




    </div>
  );
}

export default App;
