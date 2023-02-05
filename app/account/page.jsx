'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getUserNameClient } from '../util/getUserClient';
// import { db } from '../util/pocketbase';

export default function Account() {
  const router = useRouter();
  const user = getUserNameClient();

  if(!user){
    router.push('/login');
  }

  return(
    <main>
      <h1>Work in progress</h1>
      <h2>Hello, {user}</h2>
      <Link href="/todos">Go to your todos</Link>
    </main>
  )
}
