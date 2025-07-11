import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/TodoListSlice';

const TodoList = () => {
  const [input, setInput] = useState('');
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addItem(input));
      setInput('');
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
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
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleRemove(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
