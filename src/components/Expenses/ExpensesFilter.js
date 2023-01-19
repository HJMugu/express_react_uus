import React, {useState} from 'react';

import './ExpensesFilter.css';





const ExpensesFilter = (props) => {

    const [enteredFilter, setEnteredFilter] = useState('')



    const filterHandler = (event) => {
        const enteredFilter = event.target.value
        setEnteredFilter(enteredFilter)
        console.log(enteredFilter)

        props.onSaveFilterData(enteredFilter)

    }


    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={filterHandler}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter