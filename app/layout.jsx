'use client';
import { deleteCookie, getCookie } from 'cookies-next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckSquare, Moon, Sun, User } from "phosphor-react";
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');
  const [shown, setShown] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const db = new PocketBase('https://todooly-pocketbase.fly.dev');
  const router = useRouter();
  const user = getCookie('user')

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if(user) {
      setSignedIn(true)
    } else {
      setSignedIn(false);
    }
  }, [theme, user])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const showMenu = {
    enter: {
      opacity: 1,
      y: 0,
      display: "block",
      x: -105,
    },
    exit: {
      y: -5,
      x: -105,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  function handleSignout(e) {
    deleteCookie("user");
    db.authStore.clear();
    router.refresh();
  }

  return (
    <html lang="en" className="" >
      <head />
      <body className='h-full w-full bg-white dark:bg-bkg transition-all duration-300 motion-reduce:transition-none'>
        <header>
          <nav className="bg-green text-darker mb-3">
            <div className="flex h-20 mx-6 justify-between items-center">
              <div className="flex justify-center items-center">
                <a href="#" 
                  aria-label="Home" 
                  className="flex justify-center items-center"
                >
                  <CheckSquare size={40} />
                  <h1 className="inline-block font-bold text-lg">Todooly</h1>   
                </a> 
              </div>
                <div className="flex gap-2">
                  <motion.div
                    onHoverStart={() => setShown(true)}
                    onHoverEnd={() => setShown(false)}
                  >
                    <Link href="/account"><User size={32} aria-label="Account" /></Link>
                    <motion.ul
                      variants={showMenu}
                      initial="exit"
                      animate={shown ? "enter" : "exit"}
                      className="absolute bg-text dark:bg-darker rounded-lg p-6"
                    >
                      <Link href="/account">
                        <motion.li
                          whileHover={{
                            color: "#00FFC2",
                            y: -2,
                          }}
                          className="cursor-pointer p-1 px-3 py-2 bg-white text-darker dark:bg-bkg dark:text-text rounded-lg mb-2.5 w-36 flex items-center justify-center"
                        >
                          Account
                        </motion.li>
                      </Link>
                      {signedIn ? 
                        <button onClick={handleSignout}>
                          <motion.li
                            whileHover={{
                              color: "#00FFC2",
                              y: -2,
                            }}
                            className="cursor-pointer p-1 px-3 py-2 bg-white text-darker dark:bg-bkg dark:text-text rounded-lg w-36 flex items-center justify-center"
                        >
                           Sign out
                        </motion.li>
                        </button> : 
                        <Link href="/login">
                        <motion.li
                          whileHover={{
                            color: "#00FFC2",
                            y: -2,
                          }}
                          className="cursor-pointer p-1 px-3 py-2 bg-white text-darker dark:bg-bkg dark:text-text rounded-lg w-36 flex items-center justify-center"
                        >
                          Login
                        </motion.li>
                      </Link>}

                    </motion.ul>
                  </motion.div>

                  {theme === 'light' ? <Moon size={32} onClick={handleThemeSwitch} className="cursor-pointer" aria-label="Switch to dark theme" /> : <Sun size={32} onClick={handleThemeSwitch} className="cursor-pointer" aria-label="Switch to light theme" /> }
                </div>
            </div>           
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
