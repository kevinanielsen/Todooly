import Link from "next/link";

export default function Home() {
  return (
    <main className="transition-all duration-300 motion-reduce:transition-none w-full h-full flex items-center justify-center">
      <div className="w-11/12 md:w-2/3 flex flex-col items-center justify-center transition-all duration-300 motion-reduce:transition-none">
        <h1 className="text-lg font-bold text-center text-bg dark:text-text">Welcome to Todooly - Todooly is a work in progress, so expect bugs</h1>
        <h2 className="text-base mt-16 underline dark:text-text">Links</h2>
        <ul className="flex justify-content items-center">
          <li className="text-xs rounded-lg bg-text dark:bg-darker text-bg dark:text-text p-2 m-2 hover:scale-95 w-24 flex items-center justify-center transition-all duration-300 motion-reduce:transition-none"><Link href="/account">Account</Link></li>
          <li className="text-xs rounded-lg bg-text dark:bg-darker text-bg dark:text-text p-2 m-2 hover:scale-95 w-24 flex items-center justify-center transition-all duration-300 motion-reduce:transition-none"><Link href="/todos">Todos</Link></li>
          <li className="text-xs rounded-lg bg-text dark:bg-darker text-bg dark:text-text p-2 m-2 hover:scale-95 w-24 flex items-center justify-center transition-all duration-300 motion-reduce:transition-none"><Link href="/signup">Sign up</Link></li>
          <li className="text-xs rounded-lg bg-text dark:bg-darker text-bg dark:text-text p-2 m-2 hover:scale-95 w-24 flex items-center justify-center transition-all duration-300 motion-reduce:transition-none"><Link href="/Login">Log in</Link></li>
        </ul>
      </div>
    </main>
  )
}
