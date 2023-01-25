import PocketBase from 'pocketbase';
import { DescriptionInput } from '../../../components/desriptionInput/DescriptionInput';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto';

async function getTodo(todoId) {

    const db = new PocketBase('https://todooly-pocketbase.fly.dev');
    const data = await db.collection('tasks').getOne(todoId);
    return data;
}

export default async function TodoPage({params}) {
    const todo = await getTodo(params.id);

    return(
        <div className="bg-blacksemi h-screen w-screen fixed top-0 left-0 flex justify-center items-center">
            <div className="bg-bkg w-3/6 h-auto flex flex-col justify-center px-8 py-5">
                <DescriptionInput description={todo.description} task={todo.task} id={todo.id} />
            </div>
        </div>
    )
}