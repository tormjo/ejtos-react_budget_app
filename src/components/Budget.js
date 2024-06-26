import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, totExp, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000){
            alert("The value cannot exceed " + currency+"20,000");
        } else if (event.target.value < totExp){
            alert("The budget cannot be reduced to a value lower than the current spending " +  currency + totExp);
        } else {
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
        });

        }
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency} {<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>}</span>

</div>
    );
};
export default Budget;
