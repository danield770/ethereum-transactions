import { timeConverter } from '../helper/util';

function TransactionItem({
  from,
  to,
  confirmations,
  hash,
  timeStamp,
  address,
}) {
  return (
    <li className='transaction-item'>
      <div>From: {from === address ? <mark>{from}</mark> : from}</div>
      <div>To: {to === address ? <mark>{to}</mark> : to}</div>
      <div>Hash: {hash}</div>
      <div>Confirmations: {confirmations}</div>
      <div>{timeConverter(timeStamp)}</div>
    </li>
  );
}

export default TransactionItem;
