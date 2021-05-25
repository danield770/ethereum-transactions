// import React from 'react';
import { timeConverter } from '../helper/util';

function TransactionItem({ from, to, confirmations, hash, timeStamp }) {
  return (
    <li className='transaction-item'>
      <div>From: {from}</div>
      <div>To: {to}</div>
      <div>Hash: {hash}</div>
      <div>Confirmations: {confirmations}</div>
      <div>{timeConverter(timeStamp)}</div>
    </li>
  );
}

export default TransactionItem;
