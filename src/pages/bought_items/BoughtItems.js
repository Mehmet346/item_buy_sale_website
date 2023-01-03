import React, { useContext } from "react";
import { Store } from '../../app/store';
import MoneyIcon3 from '../../assets/money3.png'

function BoughtItems() {
    const { received } = useContext(Store);

    return (
        <div className="overflow-y-scroll h-screen grow ">
            <div className="mx-10 px-auto">
                {received.map((received) => (
                    <div className='md:flex space-y-5 relative justify-between mt-10 px-auto my-5 p-4 border rounded-lg border-[#e8e8e8] bg-[#f8f8f8]' key={received.id} >
                        <div className="flex">
                            <span className="absolute -top-4 -left-6">
                                <img src={MoneyIcon3} alt='money_icon' className="object-contain h-20"/>
                                </span>
                            <span className="absolute top-2 right-4 text-sm text-gray-500">{received.data.category} </span>
                            <div className="ml-10 text-left w-full">
                                <p>Title : {received.data.title}</p>
                                <p>Price : {received.data.price}$</p>
                                <p>Description : {received.data.description}</p>
                                <p>Seller Email : {received.data.selleremail}</p>
                                <p>Process Date : {received.data.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BoughtItems