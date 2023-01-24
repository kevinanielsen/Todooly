import { CheckSquare } from 'phosphor-react';
import PocketBase from 'pocketbase';

export function CheckTask(props) {
    const pb = new PocketBase('http://127.0.0.1:8090');

    async function handleCheck() {
        const response = await pb.collection('tasks').update(props.id, {
            'done': true,
        });
    }

    return(
        <button className='rounded-lg bg-greensemi items-center justify-center flex w-10 h-10' onClick={handleCheck}>
            <CheckSquare size={32} color="#6BF581" />
        </button>
    )
}
