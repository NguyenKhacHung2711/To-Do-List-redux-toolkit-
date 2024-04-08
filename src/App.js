import React from 'react';
import AddTodo from './components/AddToDo';
import DeleteTodo from './components/DeleteTodo';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { editTodo } from './redux/reducers/reducers';
import './App.css';

const App = () => {
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEdit = (index, task) => {
    setEditIndex(index);
    setEditedTask(task);
  };
  const handleSave = () => {
    if (editedTask.trim() !== '') {
      dispatch(editTodo({ index: editIndex, editedTask }));
      setEditIndex(null);
      setEditedTask('');
    }
  };

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <AddTodo className="add-btn" />
      <ul className='work-list'>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input 
                  className='inputSave'
                  type="text" 
                  value={editedTask} 
                  onChange={(e) => setEditedTask(e.target.value)} 
                />
                <button 
                  className="saveBtn"
                  onClick={handleSave}
                >Save</button>
              </>
            ) : (
              <>
                <span>{todo}</span>
                <div>
                <button 
                  className='editBtn'
                  onClick={() => handleEdit(index, todo)}
                >Edit</button>
                <DeleteTodo index={index} />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;