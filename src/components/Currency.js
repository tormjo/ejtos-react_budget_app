import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const{dispatch, currency}= useContext(AppContext);

  const {setNewCurrency} = useState(currency);
  const handleCurrencyChange = (event) => {
    setNewCurrency(event.target.value)
    dispatch({
        type: 'CHG_CURRENCY',
        payload: event.target.value,
    });
  } 

  return (
    <div className='alert alert-secondary'>
        <select className="custom-select" id="inputGroupSelect01" onChange={handleCurrencyChange}>
                    <option defaultValue value="£" name="GBP">£ Pound</option>
                    <option value="$" name="USD">$ Dollar</option>
                    </select>


    </div>
    );

};

export default Currency;
