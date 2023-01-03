import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import List from './List'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="flex w-full outline-none mt-10  justify-center items-center">
            <button onClick={handleShow} className="hover:w-[70%] hover:border duration-200 w-[60%] hidden py-1.5 pl-2 lg:flex items-center leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700">
                <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-3 flex-none"><path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
                <span>Search Server</span>
            </button>
            <Modal show={show} onHide={handleClose} centered size="sm">
                <div className="main">
                    <div className="flex gap-3 items-center rounded-t-lg border-b grow w-full p-2 py-3">
                        <FiSearch className="ml-2 w-5 h-5 text-sky-500" />
                        <input placeholder="Search..." type="text" className="outline-none text-lg w-full" onChange={inputHandler} />
                    </div>
                    <List input={inputText} />
                </div>
            </Modal>
        </div>
    )
}

export default SearchBar