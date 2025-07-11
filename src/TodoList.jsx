// components/TodoList.jsx
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateItem, fetchItems } from './TodoListSlice';

const TodoList = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();
  const { list: tasks, loading, error } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleAdd = () => {
    if (input.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    dispatch(addItem(newTask));
    setInput('');
  };

  const toggleTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      dispatch(updateItem({ ...task, completed: !task.completed }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="todoList">
      <h2 className="todo-heading">Todo List</h2>
      <div className="todo-container">
        <input
          type="text"
          className="task-input"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd} className="addTask-btn">Add</button>
      </div>

      {loading && <p>Loading tasks...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul className="list">
        {tasks.map(task => (
          <li key={task.id} className="listItem">
            <div className="listItems-task">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <button onClick={() => handleRemove(task.id)} className="remove-btn">✕</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
