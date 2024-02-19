import React from 'react';
import './ExpensesFilter.css'
const ExpensesFilter = (props) => {
    
    const yearChangeHandler = (event) => {
        let filteredYear = event.target.value
        props.onChangeFilter(filteredYear)
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={yearChangeHandler} defaultValue={props.selected}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};
export default ExpensesFilter;