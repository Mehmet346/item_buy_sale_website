import React from 'react'

const ServerList = () => {
    return (
        <li className="mt-12 lg:mt-8 mx-5">
            <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                Metin2 Pvp Serverlar
            </h5>
            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                <li><a className="block border-l border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/installation">Mabed2</a></li>
                <li><a className="block border-l border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/editor-setup">Rones2</a></li>
                <li><a className="block border-l border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/using-with-preprocessors">M2-Ultimate</a></li>
                <li><a className="block border-l border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/optimizing-for-production">Rohan2</a></li>
                <li><a className="block border-l border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/browser-support">Astra2</a></li>
                <li><a className="block border-l border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300" href="/docs/upgrade-guide">Phebia2</a></li>
            </ul>
        </li>
    )
}

export default ServerList