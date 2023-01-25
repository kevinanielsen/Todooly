import PocketBase from 'pocketbase';
import { NewTodo } from '../../components/newTodo/NewTodo';
import { Todo } from '../../components/todo/Todo';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto';

async function getTodos() {
    const db = new PocketBase('http://127.0.0.1:8090');
    const data = await db.collection('tasks').getFullList();
    const notDone = data.filter(todo => todo.done !== true);
    return notDone;
}

export default async function TodosPage() {
    const todos = await getTodos();
    
    return(
        <main className="flex flex-col items-center">
            <NewTodo />
            {todos.map(todo => <Todo task={todo.task} id={todo.id}/>)}
        </main>
    )
}