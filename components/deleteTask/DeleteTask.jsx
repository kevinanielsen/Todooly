import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Trash } from 'phosphor-react';
import PocketBase from 'pocketbase';

export function DeleteTask(props) {

    const router = useRouter();
    const db = new PocketBase('https://todooly-pocketbase.fly.dev');

    const handleDelete = async taskId => {
        await db.collection('tasks').delete(props.id);
        router.refresh();
    }

    return (
        <Link href="/todos" className='rounded-lg bg-redsemi w-10 h-10 items-center justify-center flex' onClick={handleDelete} aria-label="Delete task" >
            <Trash size={32} color="#F57070" />
        </Link>
    )
}

