import { cookies } from 'next/headers';

export function getUserId() {

  const nextCookies = cookies();
  const cookie = nextCookies.get('auth');
  let user;
  if(cookie){
    user = cookie.value
  } else {
    return;
  }
  
  if(user){
    const str = user.split(',')[5];
    return str.slice(6, (str.length-1));
  
  } else {
    return;
  }
}

