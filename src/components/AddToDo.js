import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducers/reducers';
import styles from './Component.module.css';

const AddToDo = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(addTodo(task));
        setTask('');
    }

    return (
        <div>
            <input  
                className={styles.inputTask} 
                type='text' 
                value={task} 
                onChange={handleChange} 
                placeholder="Enter your task..."    
            />
            <button 
                className={styles.addBtn} 
                onClick={handleSubmit}
            >ADD</button>
        </div>
    );
}

export default AddToDo;