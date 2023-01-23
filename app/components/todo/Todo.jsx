'use client'
import { CheckSquare, Trash } from 'phosphor-react';

export function Todo(props) {
    return(
        <div className="todo">
            <h2>{props.task}</h2>
            <div className="buttons-div">
                <button><CheckSquare size={32} /></button>
                <button><Trash size={32} /></button>
            </div>
        </div>
    )
}