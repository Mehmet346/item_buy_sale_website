import React, { useState, useEffect } from "react";
import { CiLight } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'
import { CiLogin } from 'react-icons/ci'
import { RiMenuFill } from 'react-icons/ri'
import Logo from './ver2.0.png'
import { logout } from "../../firebase";

const Navbar = () => {

const [theme, setTheme] = useState(null);

    useEffect(() => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }
      else {
        setTheme('light');
      }
    }, [])
  
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [theme]);
  
    const handleThemeSwitch = () => {
      setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className='sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75'>
            <div className="border-b border-slate-900/10 bg-white items-center justify-between flex p-3 text-[#354357] dark:bg-[#0f172a] dark:text-[#dfe5ee] dark:border-slate-300/10">
                <div className="">
                    {/* This is empty */}
                </div>
                {/* logo */}
                <div className="">
                  <img src={Logo}
                  alt = 'my_icon'
                  className='w-22 h-10'/>
               </div>
                {/* Search Button */}
                <div className="">
                    <button type="button" className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true">
                            <path d="m19 19-3.5-3.5">
                            </path>
                            <circle cx="11" cy="11" r="6">
                            </circle>
                        </svg>
                        <span className="flex-auto">
                            Quick search...
                        </span>
                        <kbd className="font-sans font-semibold dark:text-slate-500">
                            <abbr title="Control" className="no-underline text-slate-300 dark:text-slate-500">
                                Ctrl
                            </abbr> K
                        </kbd>
                    </button>
                </div>
                {/* For Desktop */}
                <div className="items-center justify-center gap-10 text-md font-semibold hidden lg:flex">
                    <a href="/" className="hover:text-sky-500 dark:hover:text-sky-400">
                        Homepage
                    </a>
                    <a href="/items" className="hover:text-sky-500 dark:hover:text-sky-400">
                        Components
                    </a>
                    <a href="!#" className="hover:text-sky-500 dark:hover:text-sky-400">
                        Blog
                    </a>
                    <a href="!#" className="hover:text-sky-500 dark:hover:text-sky-400">
                        Showcase
                    </a>
                    <div className="flex items-center border-l border-slate-400 ml-6 pl-8 dark:border-slate-800 gap-5">
                        <button onClick={handleThemeSwitch} type='button' className="hover:text-sky-500 dark:hidden">
                            <MdDarkMode className='w-full h-6' />
                        </button>
                        <button onClick={handleThemeSwitch} type='button' className="hover:text-sky-500 hidden dark:inline">
                            <CiLight className='w-full h-6' />
                        </button>
                        <a href="" className="hover:text-sky-500">
                            <CiLogin className='w-full h-6' onClick={logout}/>
                        </a>
                    </div>

                </div>
                {/* For Mobile */}
                <div className=" lg:hidden">
                    <a href="!#">
                        <RiMenuFill className='w-full h-8 hover:text-sky-500'/>
                    </a>
                </div>
                <div className="">
                    {/* This is empty */}
                </div>
            </div>

        </div>
    )
}

export default Navbar