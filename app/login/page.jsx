'use client';

import { useState } from 'react';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/navigation';
import { getCookie, deleteCookie, setCookie } from 'cookies-next';

export default function Login() {
  const db = new PocketBase('https://todooly-pocketbase.fly.dev');
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [problem, setProblem] = useState();

  const user = getCookie("user");

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSignout(e) {
    deleteCookie("user");
    router.refresh();
    db.authStore.clear();
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const record = await db.collection('users').authWithPassword(
        username,
        password,
      );
      
      setCookie('user', username);
    
      router.refresh();
    } catch(error) {
      console.log(error)

      setProblem(error.message);
    }
  }

  if(user) {
    return(
      <main className='flex items-center justify-center h-full w-full'>
        <button 
          className="p-5 rounded-lg text-sm ml-3 mt-3 w-6/12 dark:text-text text-bkg dark:bg-darker bg-text transition-all duration-300 motion-reduce:transition-none hover:scale-95"
          onClick={handleSignout}
        >
          Sign out
        </button>
      </main>
      
    )
  }

  return(
    <main className="flex flex-col items-center justify-center h-full w-full">
      <form className="w-11/12 md:w-2/3 my-3 transition-all duration-300 motion-reduce:transition-none items-center flex flex-col">
        <input 
          type="text" 
          className='w-full border-solid border-4 text-sm p-3 my-3 rounded-2xl bg-text text-bkg focus:border-bkg dark:text-textsemi dark:border-darker dark:bg-bkg focus:outline-none dark:focus:border-text focus:border-3 transition-all duration-300 motion-reduce:transition-none focus:motion-reduce:transition-none' 
          placeholder="Username"
          value={username}
          onChange={handleUsername}
          required
        />
        <input 
          type="text" 
          className='w-full border-solid border-4 text-sm p-3 my-3 rounded-2xl bg-text text-bkg focus:border-bkg dark:text-textsemi dark:border-darker dark:bg-bkg focus:outline-none dark:focus:border-text focus:border-3 transition-all duration-300 motion-reduce:transition-none focus:motion-reduce:transition-none' 
          placeholder="Password..."
          value={password}
          onChange={handlePassword}
          required
        />
        <button 
          className="p-5 rounded-lg text-sm mr-3 mt-3 w-full dark:text-text text-bkg dark:bg-darker bg-text transition-all duration-300 motion-reduce:transition-none hover:scale-95"
          onClick={handleLogin}
        >
          Log in
        </button>
      </form>
      {problem && <h1 className='bg-lightred text-bkg text-base font-bold p-4 mt-2 rounded-lg'>{problem}</h1>}
    </main>
  )
}