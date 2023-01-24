import { Todo } from '../../components/todo/Todo';

async function getTodos() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/tasks/records', 
    {
        next: {revalidate: 10},
    }
    );
    const data = await res.json();
    return data.items;
}

export default async function TodosPage() {
    const todos = await getTodos();
    return(
        <main className="flex flex-col items-center">
            {todos.map(todo => <Todo task={todo.task} id={todo.id}/>)}
        </main>
    )
}