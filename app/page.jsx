'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  router.push('/account');

  return (
    <main>
      Go to <a href="./todos">Todos</a>
    </main>
  )
}
