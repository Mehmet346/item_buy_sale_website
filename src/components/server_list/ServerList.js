import React, { useContext } from 'react'
import { Store } from '../../app/store';

const ServerList = () => {
    const { serverList } = useContext(Store)

    return (
        <div className="mt-12 lg:mt-8 mx-auto flex flex-col text-center">
            <h6 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
                Metin2 Pvp Serverlar
            </h6>
            {serverList.map(server => (
                <div key={server.id} className='p-1'>
                    <a href={`/${server.data.name}`} className='cursor-pointer no-underline'>
                        <li className="cursor-pointer block border-l border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300">
                            {server.data.name}
                        </li>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default ServerList