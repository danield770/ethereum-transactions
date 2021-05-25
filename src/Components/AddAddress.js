import React, { useState } from 'react';
import { isAddress } from '../helper/util';

function AddAddress({ fetchData, isLoading }) {
  const BASEURL = 'https://api.etherscan.io/api';
  const PARAMS = '?module=account&action=txlist';
  const KEY = process.env.REACT_APP_ETHERSCAN_API_KEY;

  const [formValue, setFormValue] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  function validateAddress(str) {
    if (isAddress(str)) {
      setErrorMsg('');
    } else {
      setErrorMsg('error: please enter a valid address');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchData(`${BASEURL}${PARAMS}&apikey=${KEY}&address=${formValue}`);
  }

  function handleChange(e) {
    setFormValue(e.target.value);
    console.log('e.target.value', e.target.value);
    console.log('formValue', formValue);
    validateAddress(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter ethereum address'
        value={formValue}
        onChange={handleChange}
      />
      <button className='btn' disabled={errorMsg !== ''}>
        {isLoading ? <span className='spinner'></span> : 'Get Transactions'}
      </button>
      {typeof errorMsg === 'string' && errorMsg.includes('error') && (
        <div className='error'>{errorMsg}</div>
      )}
    </form>
  );
}

export default AddAddress;
