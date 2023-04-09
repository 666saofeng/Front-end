import './app.css';
import Reorder from './Reorder';
import { useState } from 'react';

function App() {
   let [count ,setCount] = useState(5);
   function onReorder() {
       setCount(count = 5)
   } 
  return (
    <div className="app">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>  */}
      <p className='app__title-count'> inventory : {count}</p>
      {/* <Reorder onReorder={ (e) => {count(number = 5)}}>Reorder</Reorder> */}
      <button className='app__button-plus' onClick={(e) => setCount(count = count + 1)}>+</button>
      <button className='app__button-minus' onClick={(e) => setCount(count = count - 1)} disabled={(!count)}>-</button>
      { (count === 0) && <Reorder className='app__Reorder-button' onReorder= {onReorder}/> }
    </div>
  );
}

export default App;
