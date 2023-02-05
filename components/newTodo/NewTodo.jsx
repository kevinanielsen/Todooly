'use client'
import { getUserIdClient } from '@/app/util/getUserClient';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { db } from '../../app/util/pocketbase';

export function NewTodo() {
    const [input, setInput] = useState("");

    const router = useRouter();
    const user = getUserIdClient();

    async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            "task": input,
            "done": false,
            "description": "",
            "user": user,
        };
        setInput('');
        const record = await db.collection('tasks').create(data);

        router.refresh();
    }

    return(
        <form onSubmit={handleSubmit} className="w-11/12 md:w-2/3 my-3 transition-all duration-300 motion-reduce:transition-none">
            <input 
                type="text" 
                onChange={(e) => setInput(e.target.value)} 
                value={input} 
                placeholder="New task..."
                className="w-full border-solid border-4 text-sm p-3 rounded-2xl bg-text text-bkg focus:border-bkg dark:text-textsemi dark:border-darker dark:bg-bkg focus:outline-none dark:focus:border-text focus:border-3 transition-all duration-300 motion-reduce:transition-none focus:motion-reduce:transition-none"
            />
        </form>
    )
}