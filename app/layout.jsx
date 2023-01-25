'use client';
import { CheckSquare, Moon, Sun, User } from "phosphor-react";
import { useEffect, useState } from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');

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

  return (
    <html lang="en" className='dark' >
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
                  {theme === 'light' ? <Moon size={32} onClick={handleThemeSwitch} className="cursor-pointer" aria-label="Switch to dark theme" /> : <Sun size={32} onClick={handleThemeSwitch} className="cursor-pointer" aria-label="Switch to light theme" /> }
                  <User size={32} aria-label="Account" />
                </div>
            </div>           
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
