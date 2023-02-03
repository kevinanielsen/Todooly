import { getCookie } from 'cookies-next';
import { NewTodo } from '../../components/newTodo/NewTodo';
import { Todo } from '../../components/todo/Todo';
import { db } from '../util/pocketbase';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto';

const user = getCookie('user');

async function getTodos() {

    const data = await db.collection('tasks').getList(1, 50, {
        filter: ''
    }

    )


    return data;
}

async function test() {
    const data = await db.collection('users').getList(1, 50, {
        filter: 'user = keveran',
    });
    console.log(data);
}

export default async function TodosPage() {
    const todos = await getTodos();
    
    await test();

    return(
        <main className="flex flex-col items-center">
            <NewTodo />
            {todos.map(todo => <Todo task={todo.task} key={todo.id} id={todo.id}/>)}
        </main>
    )
}