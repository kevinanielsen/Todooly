'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getUserNameClient } from '../util/getUserClient';

export default function Account() {
  const router = useRouter();
  const user = getUserNameClient();

  if(!user){
    setTimeout(()=> {
      router.push('/login')
    }, 500)
  }

  return(
    <main>
      <h1>Work in progress</h1>
      {user && <h1>Welcome, {user}</h1>}
      <Link href="/todos">Go to your todos</Link>
    </main>
  )
}
