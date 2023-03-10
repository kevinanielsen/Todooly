'use client';

import { deleteCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getUserNameClient } from '../util/getUserClient';
import { db } from '../util/pocketbase';

export default function Signup() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [problem, setProblem] = useState();

  const user = getUserNameClient();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  async function handleSignup(e) {
    e.preventDefault();
    setEmail('');
    setPassword('');
    const data = {
      "username": username,
      "email": email,
      "emailVisibility": true,
      "password": password,
      "passwordConfirm": password,
    }
    try{ 
      const record = await db.collection('users').create(data)
      setCookie('auth', db.authStore.model)
      router.refresh();
    } catch(e) {
      alert(e);
    }
  }

  function handleSignout(e) {
    deleteCookie("user");
    router.refresh();
    db.authStore.clear();
  }

  if(user) {
    router.push('/account');

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
          placeholder="Email..."
          value={email}
          onChange={handleEmail}
        />
        <input 
          type="text" 
          className='w-full border-solid border-4 text-sm p-3 my-3 rounded-2xl bg-text text-bkg focus:border-bkg dark:text-textsemi dark:border-darker dark:bg-bkg focus:outline-none dark:focus:border-text focus:border-3 transition-all duration-300 motion-reduce:transition-none focus:motion-reduce:transition-none' 
          placeholder="Username..."
          value={username}
          onChange={handleUsername}
        />
        <input 
          type="password" 
          className='w-full border-solid border-4 text-sm p-3 my-3 rounded-2xl bg-text text-bkg focus:border-bkg dark:text-textsemi dark:border-darker dark:bg-bkg focus:outline-none dark:focus:border-text focus:border-3 transition-all duration-300 motion-reduce:transition-none focus:motion-reduce:transition-none' 
          placeholder="Password..."
          value={password}
          onChange={handlePassword}
        />
        <button 
          className="p-5 rounded-lg text-sm ml-3 mt-3 w-full dark:text-text text-bkg dark:bg-darker bg-text transition-all duration-300 motion-reduce:transition-none hover:scale-95"
          onClick={handleSignup}
        >
          Sign up
        </button>
        <Link href="/login" className='mt-2 text-bg dark:text-text'>Already have an account? Click here to log in.</Link>
      </form>

      {problem && <h1 className='bg-lightred text-bkg text-base font-bold p-4 mt-2 rounded-lg'>{problem}</h1>}
    </main>
  )
}
