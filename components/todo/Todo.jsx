'use client'
import Link from 'next/link';
import { CheckSquare, Pencil, Trash } from 'phosphor-react';
import { CheckTask } from '../checkTask/CheckTask';
import { DeleteTask } from '../deleteTask/DeleteTask';

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
                <CheckTask id={props.id}/>
                <DeleteTask id={props.id} />
            </div>
        </div>
    )
}