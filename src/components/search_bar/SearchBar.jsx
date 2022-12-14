import React from 'react'

const SearchBar = () => {
    return (
        <div className="w-full mt-10 bg-fuchsia-300 justify-center items-center">
            <button className="w-[70%] hidden py-1.5 pl-2 lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700">
                <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-3 flex-none"><path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
            </button>
        </div>
    )
}

export default SearchBar