import { getCookie } from 'cookies-next';
// import { db } from '../util/pocketbase';

export default function Account() {
  const user = getCookie("user");
  console.log("🚀 ~ file: page.jsx:6 ~ Account ~ user", user)

  return(
    <main>
      <h1>Work in progress</h1>
      <h2>Hello, {user}</h2>
    </main>
  )
}