import TransactionItem from './TransactionItem';

function TransactionList({ data, address }) {
  return (
    <div>
      {data?.length > 0 ? (
        <ul className='transaction-list'>
          {data.map((transaction) => (
            <TransactionItem
              key={transaction.hash}
              from={transaction.from}
              to={transaction.to}
              confirmations={transaction.confirmations}
              hash={transaction.hash}
              timeStamp={transaction.timeStamp}
              address={address}
            />
          ))}
        </ul>
      ) : (
        <div className='empty'>No transactions</div>
      )}
    </div>
  );
}

export default TransactionList;
