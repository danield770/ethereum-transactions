import './App.css';
import React, { useState } from 'react';
import AddAddress from './Components/AddAddress';
import TransactionList from './Components/TransactionList';

import useFetch from './hooks/useFetch';

function App() {
  function fetchData(url) {
    setUrl(url);
  }
  const [url, setUrl] = useState('');
  const { data, isLoading } = useFetch(url);

  return (
    <div className='app'>
      <AddAddress fetchData={fetchData} isLoading={isLoading} />
      <TransactionList data={data?.result} />
    </div>
  );
}

export default App;
