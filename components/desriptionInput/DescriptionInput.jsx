'use client'
import { CheckSquare, Trash } from 'phosphor-react';
import { useState } from "react";

export function DescriptionInput(props) {
    const todo = props.todo;
    const [description, setDescription] = useState(todo.description);

    function handleChange(e) {
        setDescription(e.target.description);
    }

    return (
        <div className="w-full h-full">
            <textarea 
                type="text" 
                className="bg-darker rounded-lg focus:outline-none p-6 text-text text-xs h-96 w-full items-baseline flex resize-none shrink"
                value={description} 
                onChange={handleChange}
            ></textarea>
            <div className="flex">
                <button className='rounded-lg bg-greensemi items-center justify-center flex w-10 h-10'><CheckSquare size={32} color="#6BF581" /></button>
                <button className='rounded-lg bg-redsemi w-10 h-10 items-center justify-center flex'><Trash size={32} color="#F57070" /></button>
            </div>

        </div>
        
    )

}