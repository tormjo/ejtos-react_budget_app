import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const{dispatch, currency}= useContext(AppContext);

  const {currency, setCurrency} = useState(currency);

  return (
<div className='alert alert-secondary'>
    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setAction(event.target.value)}>
                  <option defaultValue value="£" name="GBP">£</option>
                  <option value="$" name="USD">$</option>
                  </select>


</div>
    );

};

export default Currency;
