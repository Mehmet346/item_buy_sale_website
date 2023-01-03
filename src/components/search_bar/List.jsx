import { React, useContext } from 'react'
import { Store } from '../../app/store';
import { Link } from 'react-router-dom';
import { BsArrowClockwise } from 'react-icons/bs';


function List(props) {
    const { serverList } = useContext(Store);

    const filteredData = serverList.filter((el) => {
        if (props.input === '') {
            return el
        }
        else {
            return el.data.name.toLowerCase().includes(props.input)
        }
    })

    return (
        <div className="px-auto pb-2">
            <div>
                <span className='p-2'>Server List</span>
            </div>

            <div className='space-y-2'>
                {filteredData.map((item) => (
                    <div className='mx-1'>
                        <a href={item.data.name} className='no-underline text-black'>
                            <div key={serverList.id} className='relative flex items-center gap-3 border-b py-3 rounded hover:bg-blue-50 hover:text-sky-600 hover:border-sky-600 hover:border cursor-pointer' >
                                <BsArrowClockwise className='ml-5 w-5 h-5' />
                                {item.data.name}
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List