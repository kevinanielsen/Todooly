'use client';

import { useState } from 'react';
import PocketBase from 'pocketbase';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function Account() {
  const db = new PocketBase('https://todooly-pocketbase.fly.dev');
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [problem, setProblem] = useState();

  const user = getCookie("user");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handleSignup(e) {
    e.preventDefault();
    setEmail('');
    setPassword('');
    const data = {
      "email": email,
      "emailVisibility": true,
      "password": password,
      "passwordConfirm": password,
    }
    try{ 
      const record = await db.collection('users').create(data)
      setCookie('user', email);
      router.refresh();
    } catch(e) {
      alert(e);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const record = await db.collection('users').authWithPassword(
        email,
        password,
      );
      
      setCookie('user', email);
    
      router.refresh();
    } catch(error) {
      console.log(error)

      setProblem(error.message);
    }
  }

  function handleSignout(e) {
    deleteCookie("user");
    router.refresh();
    db.authStore.clear();
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
          placeholder="Email..."
          value={email}
          onChange={handleEmail}
        />
        <input 
          type="text" 
          className='w-full border-solid border-4 text-sm p-3 my-3 rounded-2xl bg-text text-bkg focus:border-bkg dark:text-textsemi dark:border-darker dark:bg-bkg focus:outline-none dark:focus:border-text focus:border-3 transition-all duration-300 motion-reduce:transition-none focus:motion-reduce:transition-none' 
          placeholder="Password..."
          value={password}
          onChange={handlePassword}
        />
        <div className="flex items-center justify-between w-full">
          <button 
            className="p-5 rounded-lg text-sm mr-3 mt-3 w-6/12 dark:text-text text-bkg dark:bg-darker bg-text transition-all duration-300 motion-reduce:transition-none hover:scale-95"
            onClick={handleLogin}
          >
            Log in
          </button>
          <button 
            className="p-5 rounded-lg text-sm ml-3 mt-3 w-6/12 dark:text-text text-bkg dark:bg-darker bg-text transition-all duration-300 motion-reduce:transition-none hover:scale-95"
            onClick={handleSignup}
          >
            Sign up
          </button>
        </div>
      </form>

      {problem && <h1 className='bg-lightred text-bkg text-base font-bold p-4 mt-2 rounded-lg'>{problem}</h1>}
    </main>
  )
}
