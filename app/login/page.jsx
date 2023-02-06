'use client';

import { deleteCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getUserNameClient } from '../util/getUserClient';
import { db } from '../util/pocketbase';

export default function Login() {
  
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [problem, setProblem] = useState();

  const user = getUserNameClient();

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSignout(e) {
    deleteCookie("auth");
    router.refresh();
    db.authStore.clear();
  }

  async function handleLogin(e) {
    e.preventDefault();

    if(!username || !password) {
      setProblem('Username or password cannot be empty!')
    }
    try {
      const record = await db.collection('users').authWithPassword(
        username,
        password,
        {'$autoCancel': false}
      );
      
      setProblem();
      setCookie('auth', db.authStore.model)
      router.refresh();
    } catch(error) {
      console.log(error)

      setProblem(error.message);
    }
  }

  if(user) {
    router.push('/todos');
    
    return(
      <main className='flex flex-col items-center justify-center h-full w-full'>
        <h1>Welcome, {user}</h1>
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
      <form className="w-11/12 md:w-2/3 my-3 transition-all duration-300 motion-reduce:transition-none items-center justify-center flex flex-col">
        <input 
          type="text" 
          className='w-full border-solid border-4 text-sm p-3 my-3 rounded-2xl bg-text text-bkg focus:border-bkg dark:text-textsemi dark:border-darker dark:bg-bkg focus:outline-none dark:focus:border-text focus:border-3 transition-all duration-300 motion-reduce:transition-none focus:motion-reduce:transition-none' 
          placeholder="Username"
          value={username}
          onChange={handleUsername}
          required
        />
        <input 
          type="password" 
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
        <Link href="/signup" className='mt-2 text-bg dark:text-text'>Do not have an account? Click here to sign up.</Link>
      </form>
      {problem && <h1 className='bg-lightred text-bkg text-base font-bold p-4 mt-2 rounded-lg'>{problem}</h1>}
    </main>
  )
}