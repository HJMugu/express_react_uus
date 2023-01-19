import ExpenseItem from "./ExpenseItem";
import  './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";



const Expenses = (props) => {

    const saveExpensesFilter = (enteredFilterData) => {
        const expenseFilter =  enteredFilterData


        props.onAddFilter(expenseFilter)


    }



    return(
        <Card className="expenses">
            <ExpensesFilter onSaveFilterData={saveExpensesFilter}></ExpensesFilter>
        <ExpenseItem expenseData={props.expenseData[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.expenseData[1]}></ExpenseItem>
        </Card>


    )
}


export default Expenses