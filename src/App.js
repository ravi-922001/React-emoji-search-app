import React, { useState, useEffect } from 'react';
import './App.css';
import Emoji from './Emoji';
import { emojiData } from './emojiData';

function App() {

  

  const [dummyData, setDummyData] = useState(emojiData);
  const [search, setSearch] = useState('');


  const dataHandler = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const newData = emojiData.filter(emoji => emoji.name.includes(search.toLowerCase()));
    setDummyData(newData);
  }, [search])

  return (
    <div className="App">
      <div className="input">
        <input placeholder="Enter emoji name" onChange={dataHandler} value={search} />
      </div>
      {dummyData.map(data => <Emoji name={data.name} emoji={data.emojicode} /> )}
    </div>
  );
}

export default App;
