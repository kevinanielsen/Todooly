import { useRouter } from 'next/navigation';
import { Trash } from 'phosphor-react';
import PocketBase from 'pocketbase';

export function DeleteTask(props) {

    const router = useRouter();
    const db = new PocketBase('http://127.0.0.1:8090');

    const handleDelete = async taskId => {
        await db.collection('tasks').delete(props.id);
        router.refresh();
    }

    return (
        <button className='rounded-lg bg-redsemi w-10 h-10 items-center justify-center flex' onClick={handleDelete}>
            <Trash size={32} color="#F57070" />
        </button>
    )
}

