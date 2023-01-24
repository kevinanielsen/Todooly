'use client'
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';
import { useState } from 'react';

export function NewTodo() {
    const [input, setInput] = useState("");

    const router = useRouter();
    const db = new PocketBase('http://127.0.0.1:8090');

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
        <form onSubmit={handleSubmit} className="w-2/3 my-3">
            <input 
                type="text" 
                onChange={(e) => setInput(e.target.value)} 
                value={input} 
                placeholder="New task..."
                className="w-full bg-bkg border-solid border-4 border-darker w-full text-sm p-3 text-textsemi rounded-2xl"
            />
        </form>
    )
}