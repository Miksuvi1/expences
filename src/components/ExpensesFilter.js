import React from 'react';
import './ExpensesFitler.css';
const ExpensesFilter = () => {
    return (
        <div className='expenses-filter'>
            <div className='expensees-filter__control'>
                <label>Filter by year</label>
                <select>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};
export default ExpensesFilter;