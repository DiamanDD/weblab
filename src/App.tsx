import React, {useState} from 'react';
import './App.css';
import {Counter} from './Counter';
import {RandomList} from "./RandomList";

function App() {


    const [incr,setIncr]=useState<number>(0)

    function onClickIncr(incr:number){
        setIncr(prevState => prevState+1)
    }
  return (
      <div>
        <button onClick={()=>onClickIncr(incr)}>Инкрементировать</button>
        <Counter counter={incr} />
        <RandomList count={incr} />
      </div>
  );
}

export default App;
