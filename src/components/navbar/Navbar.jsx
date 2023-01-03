import React, { useContext, useState } from "react";
import { CiLogin, CiDark, CiLight } from 'react-icons/ci'
import { RiMenuFill } from 'react-icons/ri'
import Logo from '../../assets/ver2.0.png'
import HeaderOption from "./HeaderOption";
import TextField from "@mui/material/TextField";
import List from "../List/List"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineHome } from 'react-icons/ai'
import { MdHelpOutline } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { MdOutlinePermContactCalendar } from 'react-icons/md'
import { MdPlaylistAdd } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { changeToDark, changeToLight } from '../../app/darkModeReducer'
import { Store } from '../../app/store';
import { Link } from "react-router-dom";

const Navbar = () => {
    const { logout, show, setShow } = useContext(Store);
    const theme = useSelector((state) => state.darkTheme.dark)
    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="sticky border-b border-slate-900/10 bg-white items-center justify-between flex p-3 text-[#354357] dark:bg-[#0f172a] dark:text-[#dfe5ee] dark:border-slate-300/10">

            {/* logo */}
            <img src={Logo}
                alt='my_icon'
                className='w-22 h-10' />

            {/* Search Button */}
            <div className="">
                <button type="button" onClick={handleShow} className="hover:border hover:w-96 duration-300 hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300  focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
                    <span className="flex-auto">
                        <div className="flex gap-x-5">
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true">
                                <path d="m19 19-3.5-3.5">
                                </path>
                                <circle cx="11" cy="11" r="6">
                                </circle>
                            </svg>
                            <span className="flex-auto">
                                Quick search...
                            </span>
                        </div>
                    </span>
                </button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <div className='rounded-b-lg pb-2'>
                    <div className="flex gap-3 items-center rounded-t-lg border-b grow w-full p-2 py-3">
                        <FiSearch className="ml-2 w-5 h-5 text-sky-500" />
                        <input placeholder="Search..." type="text" className="outline-none text-lg w-full" onChange={inputHandler} />

                    </div>
                    <List input={inputText} />
                </div>
            </Modal>

            {/* For Desktop */}
            <div className="items-center justify-center gap-10 text-md font-semibold hidden lg:flex">

                <Link to='/'><HeaderOption image={<AiOutlineHome className="w-5 h-5" />} title='Homepage' /></Link>
                <HeaderOption image={<MdHelpOutline className="w-6 h-6" />} title='Help' />
                <HeaderOption image={<MdOutlinePermContactCalendar className="w-5 h-5" />} title='Contact Us' />
                <HeaderOption image={<MdPlaylistAdd className="w-6 h-6" />} title='Add Item' />

                <div className="flex items-center border-l border-slate-400 ml-6 pl-8 dark:border-slate-800 gap-3">
                    <div onClick={() => { !theme ? dispatch(changeToDark()) : dispatch(changeToLight()) }} className='cursor-pointer hover:text-sky-300'>
                        {theme ? <CiLight className='h-6 w-6' /> : <CiDark className='h-6 w-6' />}
                    </div>

                    <div className="hover:text-sky-500 cursor-pointer">
                        <CiLogin onClick={logout} className='h-6 w-6' />
                    </div>
                </div>

            </div>
            {/* For Mobile */}
            <div className=" lg:hidden">
                <RiMenuFill className='w-full h-8 hover:text-sky-500' />
            </div>
        </div>

    )
}

export default Navbar