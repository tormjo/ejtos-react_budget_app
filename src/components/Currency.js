import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const{dispatch}= useContext(AppContext);

  
  const handleCurrencyChange = (event) => {
    console.log(event.target.value)    
    dispatch({
        type: 'CHG_CURRENCY',
        payload: event.target.value,
    });
  } 

  return (
    <div className='alert alert-secondary'>
        <span>Currency: <select className="custom-select" id="inputGroupSelect01"  onChange={handleCurrencyChange}>
                    <option defaultValue value="£" name="GBP">£ Pound</option>
                    <option value="$" name="USD">$ Dollar</option>
                    <option value="€" name="EUR">€ Euro</option>
                    <option value="₹" name="INR">₹ Rupee</option>
                    </select></span>


    </div>
    );

};

export default Currency;
