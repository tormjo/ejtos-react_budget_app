import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props= => {
  const{dispatch, currency}= useContext(AppContext);

  const {currency, setCurrency} = useState(currency);

  return (
<div className='alert alert-secondary'>
<span>Budget: {currency} {<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>}</span>

</div>
    );
}


                  <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                <option value="Reduce" name="Reduce">Reduce</option>
                  </select>

                  
    );
};

export default AllocationForm;
