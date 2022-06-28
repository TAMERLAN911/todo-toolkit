
import './App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from './features/todoReducer';

const App = () => {
  const todos = useSelector((state)=> state.todos)
  const dispatch = useDispatch()
  const [text, setText] = useState('')


  const handleClick = () => {
  dispatch(add(text))  
  setText('')
  }

  const handleChange = (e) => {
setText(e.target.value)
  }

  const handleRem = (id) => {
    dispatch(remove(id))
  }
  
  
  return (
    <div className='main'>
      <div className='inpBtn'>
        <input type='text' onChange={handleChange} value={text} />
        <button onClick={handleClick}>Add</button>
      </div>
      <div className='addList'>
    {todos.map((item, id)=> {
      return (
        <div className='text' key={id}>
          {item.text}
         <button onClick={() => handleRem(id)}>x</button>
         
        </div>
      )
    })}
      </div>
    </div>
  );
};

export default App;