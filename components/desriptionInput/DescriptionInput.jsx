'use client'
import { useRouter } from 'next/navigation';
import { CheckSquare } from 'phosphor-react';
import PocketBase from 'pocketbase';
import { useState } from "react";
import { DeleteTask } from '../deleteTask/DeleteTask';

export function DescriptionInput(props) {
    const db = new PocketBase('https://todooly-pocketbase.fly.dev')
    const router = useRouter();
    const todo = props.todo;
    const [description, setDescription] = useState(todo.description);
    const [title, setTitle] = useState(todo.task);

    function handleChange(e) {
        setDescription(e.target.value);
    }

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault();
        const res = await db.collection('tasks').update(todo.id, {
            "task": title,
            "description": description
        })
        router.push('/todos')
    }

    return (
        <form className="w-full h-full" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="text-lg text-text font-light border-solid border-b-4 w-full border-darker bg-bkg focus:outline-none"
                value={title}
                onChange={handleTitleChange}
                aria-label="Edit task-name"
            >
            </input>
            <h3 className="text-sm text-darker">Description</h3>
            <textarea 
                type="text" 
                className="bg-darker rounded-lg focus:outline-none p-6 text-text text-xs h-96 w-full items-baseline flex resize-none shrink mb-5"
                value={description} 
                onChange={handleChange}
                aria-label="Edit task-description"
            ></textarea>
            <div className="flex">
                <button type="submit" className='rounded-lg bg-greensemi items-center justify-center flex w-auto h-10 text-lightgreen px-1.5 mr-4' aria-label="Done editing" >Editing Done<CheckSquare size={32} color="#6BF581" className="ml-2" /></button>
                <DeleteTask id={todo.id} />
            </div>

        </form>
        
    )

}