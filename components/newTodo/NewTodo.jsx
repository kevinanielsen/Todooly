'use client'
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';
import { useState } from 'react';

export function NewTodo() {
    const [input, setInput] = useState("");

    const router = useRouter();
    const db = new PocketBase('https://todooly-pocketbase.fly.dev');

    async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            "task": input,
            "done": false,
            "description": ""
        };
        setInput('');
        router.refresh();
        
        const record = await db.collection('tasks').create(data);
    }

    return(
        <form onSubmit={handleSubmit} className="w-11/12 md:w-2/3 my-3 transition-all duration-300 motion-reduce:transition-none">
            <input 
                type="text" 
                onChange={(e) => setInput(e.target.value)} 
                value={input} 
                placeholder="New task..."
                className="w-full border-solid border-4 w-full text-sm p-3  rounded-2xl bg-text text-bkg focus:border-bkg dark:text-textsemi dark:border-darker dark:bg-bkg focus:outline-none dark:focus:border-text focus:border-3 transition-all duration-300 motion-reduce:transition-none focus:motion-reduce:transition-none"
            />
        </form>
    )
}