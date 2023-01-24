
import { Navbar } from '../components/navbar/Navbar';
import { Todo } from '../components/todo/Todo';

async function getTodos() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/tasks/records');
    const data = await res.json();
    if(data) {
        console.log(data.items);
        return data.items;
    } else {
        console.log('Error!')
    }
    
}

export default async function TodosPage() {
    const todos = await getTodos();
    return(
        <main>
            {todos.map(todo => <Todo task={todo.task} />)}
        </main>
    )
}