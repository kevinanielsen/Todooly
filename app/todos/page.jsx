import { NewTodo } from '../../components/newTodo/NewTodo';
import { Todo } from '../../components/todo/Todo';
import { getUserId } from '../util/getUser';
import { db } from '../util/pocketbase';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto';



async function getTodos() {
  const user = getUserId();
  const data = await db.collection('tasks').getList(1, 50, {
    filter: `user = "${user}" && done = false`
  })
  return data;
}

export default async function TodosPage() {
  const user = getUserId();

  if(!user) {
    return(
      <main className='flex items-center justify-center'>
        <h1 className='text-bg dark:text-text text-base font-bold'>You need to login to see your todos.</h1>
      </main>
    )
  }

  const data = await getTodos();
  const todos = data.items;

  return(
    <main className="flex flex-col items-center">
      <NewTodo />
      {todos && todos.map(todo => <Todo task={todo.task} key={todo.id} id={todo.id}/>)}
    </main>
  )
}