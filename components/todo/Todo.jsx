'use client'
import Link from 'next/link';
import { Pencil } from 'phosphor-react';
import { CheckTask } from '../checkTask/CheckTask';
import { DeleteTask } from '../deleteTask/DeleteTask';

export function Todo(props) {
    return(
        <div className="flex justify-between items-center rounded-2xl px-5 py-5 xl:py-2 my-3 w-11/12 md:w-2/3 bg-text dark:bg-darker transition-all duration-300 motion-reduce:transition-none">
            <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light text-bkg dark:text-text">{props.task}</h2>
            <div className="flex flex-column gap-2">
                <Link 
                    href={`/todos/${props.id}`}
                    className="rounded-lg items-center justify-center flex w-10 h-10 bg-bluesemilight dark:bg-bluesemi"
                    aria-label="Edit task"
                >
                    <Pencil size={32} color="#60B3FF" />
                </Link>
                <CheckTask id={props.id} />
                <DeleteTask id={props.id} />
            </div>
        </div>
    )
}