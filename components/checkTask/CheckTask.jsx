import { useRouter } from 'next/navigation';
import { CheckSquare } from 'phosphor-react';
import PocketBase from 'pocketbase';

export function CheckTask(props) {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const router = useRouter();

    async function handleCheck() {
        const response = await pb.collection('tasks').update(props.id, {
            'done': true,
        });
        router.refresh();
    }

    return(
        <button className='rounded-lg bg-greensemi items-center justify-center flex w-10 h-10' onClick={handleCheck} aria-label="Task done">
            <CheckSquare size={32} color="#6BF581" />
        </button>
    )
}
