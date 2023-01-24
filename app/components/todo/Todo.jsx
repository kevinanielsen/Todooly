'use client'
import { CheckSquare, Trash } from 'phosphor-react';
import './todo.css';

export function Todo(props) {
    return(
        <div className="todo">
            <h2>{props.task}</h2>
            <div className="buttons-div">
                <button className='check-button'><CheckSquare size={32} /></button>
                <button className='delete-button'><Trash size={32} /></button>
            </div>
        </div>
    )
}