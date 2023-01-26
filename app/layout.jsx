'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckSquare, Moon, Sun, User } from "phosphor-react";
import { useEffect, useState } from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');
  const [shown, setShown] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const signIn = () => {
    setSignedIn(signedIn ? false : true);
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

  return (
    <html lang="en" className="" >
      <head />
      <body className='bg-white dark:bg-bkg'>
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
                    <User size={32} aria-label="Account" />
                    <motion.ul
                      variants={showMenu}
                      initial="exit"
                      animate={shown ? "enter" : "exit"}
                      className="absolute bg-text dark:bg-darker rounded-lg p-6"
                    >
                      <Link href="/">
                        <motion.li
                          whileHover={{
                            color: "#00FFC2",
                            y: -2,
                          }}
                          className="cursor-pointer p-1 px-3 py-2 bg-white text-bkg dark:bg-bkg dark:text-text rounded-lg mb-2.5 w-36 flex items-center justify-center"
                        >
                          Account
                        </motion.li>
                      </Link>
                      <button onClick={signIn}>
                        <motion.li
                          whileHover={{
                            color: "#00FFC2",
                            y: -2,
                          }}
                          className="cursor-pointer p-1 px-3 py-2 bg-white text-bkg dark:bg-bkg dark:text-text rounded-lg w-36 flex items-center justify-center"
                        >
                          {signedIn ? "Sign out" : "Sign in"}
                        </motion.li>
                      </button>
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
