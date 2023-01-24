'use client'
import Link from 'next/link';
import { CheckSquare, Pencil, Trash } from 'phosphor-react';

export function Todo(props) {
    return(
        <div className="bg-darker flex justify-between items-center rounded-2xl p-5 w-2/3 my-3">
            <h2 className="text-base font-light text-text">{props.task}</h2>
            <div className="flex flex-column gap-2">
                <Link 
                    href={`/todos/${props.id}`}
                    className="rounded-lg bg-bluesemi items-center justify-center flex w-10 h-10"
                >
                    <Pencil size={32} color="#60B3FF" />
                </Link>
                <button className='rounded-lg bg-greensemi items-center justify-center flex w-10 h-10'>
                    <CheckSquare size={32} color="#6BF581" />
                </button>
                <button className='rounded-lg bg-redsemi w-10 h-10 items-center justify-center flex'>
                    <Trash size={32} color="#F57070" />
                </button>
            </div>
        </div>
    )
}