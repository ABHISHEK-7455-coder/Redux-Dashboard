import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, toggleItem, fetchTodos } from '../redux/TodoListSlice';

const TodoList = () => {
  const [input, setInput] = useState('');
  const { items, status, error } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [dispatch, status]);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addItem(input));
      setInput('');
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleItem(id));
  };

  return (
    <div className="todo-list">
      <h3>Todo List</h3>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {status === 'loading' && <p>Loading tasks...</p>}
      {status === 'failed' && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(item.id)}
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
              {item.text}
            </span>
            <button onClick={() => handleRemove(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

function Ticket(str1){
  let result ="";
  let i = 0;

  while(i < str1.length){
    if(str1[i] === 'E' && str1[i+1] === 'F'){
      i += 2;
    }
    else if(str1[i] === '5'  && str1[i+1] === '6'){
      i += 2;
    }
    else if(str1[i] === 'G'){
      i += 1;
    }
    else{
      result += str1[i];
      i += 1;
    }
  }
  return result;
}

const input = '2323EF58G';
console.log(Ticket(input));
console.log(Ticket("4523EF58G"));     
console.log(Ticket("E12F35G58"));   
console.log(Ticket("E56FG"));        
console.log(Ticket("EF56G"));       
console.log(Ticket("ABCDE"));     
console.log(Ticket("123G456EF"));

function rotateRight(arr, k) {
    k = k % arr.length; // To handle if k > arr.length
    return arr.slice(-k).concat(arr.slice(0, -k));
}

function rotateLeft(arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
}

let arr = [1, 2, 3, 4, 5];
console.log(rotateRight(arr, 2));
console.log(rotateLeft(arr, 2));

// 1. Write a program to find the second largest element in an array.
// 2. No sorting allowed. Use only one loop if possible.
// 3. Write a C++ program to check if an array is sorted in ascending order.


function secondLargest(arr){
  let arr = [1, 2, 4, 66, 65];
  
  
}

