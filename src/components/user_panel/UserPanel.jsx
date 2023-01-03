import React from 'react'
import UserNavBar from './UserNavBar'
import { BsCartPlus } from 'react-icons/bs';
import { RiUserSettingsLine } from 'react-icons/ri';
import { MdAutoGraph } from 'react-icons/md';
import { BiStore } from 'react-icons/bi';
import { RiHandCoinLine } from 'react-icons/ri';

const UserPanel = () => {
    return (

        <div className="px-14 mt-10 flex flex-col">
                <UserNavBar
                Icon = {<RiUserSettingsLine className='w-5 h-5'/>}
                text = 'Dashboard'
                router = '/dashboard'
                />
                
                <UserNavBar
                Icon = {<BiStore className='w-5 h-5'/>}
                text = 'My Items'
                router = '/my_items'
                />
                
                <UserNavBar
                Icon = {<BsCartPlus className='w-5 h-5'/>}
                text = 'Add Items'
                router = '/add_items'
                />
                
                <UserNavBar
                Icon = {<MdAutoGraph className='w-5 h-5'/>}
                text = 'Received Items'
                router = '/bought_items'
                />
                
                <UserNavBar
                Icon = {<RiHandCoinLine className='w-5 h-5'/>}
                text = 'Sold Items'
                router = '/sold_items'
                />
        </div>
    )
}

export default UserPanel