import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/reducers/reducers";
import styles from './Component.module.css';


const DeleteTodo = ({ index }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTodo(index));
    };

    return (
        <button className={styles.delBtn} onClick={handleDelete}>Delete</button>
    );
}

export default DeleteTodo;