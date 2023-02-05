import { getCookie } from 'cookies-next';

export function getUserIdClient() {
  const cookie = getCookie('auth');
  let user;

  if(cookie){
    user = cookie;
  } else {
    return;
  }
    
  
  if (user){
    const str = user.split(',')[5];
    return str.slice(6, (str.length-1));
  } else {
    return;
  }
}

export function getUserNameClient() {
  const cookie = getCookie('auth');
  let user;

  if(cookie){
    user = cookie;
  } else {
    return;
  }
    
  
  if (user){
    const str = user.split(',')[7];
    return str.slice(12, (str.length-1));
  } else {
    return;
  }
}

