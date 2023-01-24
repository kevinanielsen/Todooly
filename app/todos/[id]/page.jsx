import { DescriptionInput } from '../../../components/desriptionInput/DescriptionInput';

async function getTodo(todoId) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/tasks/records/${todoId}`,
        {
            next: {revalidate: 10},
        }
    );
    const data = await res.json();
    return data;
}

export default async function TodoPage({params}) {
    const todo = await getTodo(params.id);

    return(
        <div className="bg-blacksemi h-screen w-screen fixed top-0 left-0 flex justify-center items-center">
            <div className="bg-bkg w-3/6 h-auto flex flex-col justify-center px-8 py-5">
                <h2 className="text-lg text-text font-light border-solid border-b-4 w-full border-darker">{todo.task}</h2>
                <h3 className="text-sm text-darker">Description</h3>
                <DescriptionInput todo={todo}/>
            </div>
        </div>
    )
}