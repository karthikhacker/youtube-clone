import React from 'react'
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import { Youtube } from '@styled-icons/boxicons-logos/Youtube'
import { Search } from '@styled-icons/material/Search'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../redux/appSlice';
const Navbar = () => {
    const dispatch = useDispatch();

    const handleMenu = () => {
        dispatch(toggleMenu());
    }
    return (
        <div className=' flex justify-between shadow-lg p-2  items-center'>
            <div>
                <Menu size="20" onClick={handleMenu} className="cursor-pointer" />
                <Youtube size="30" className='ml-2' />
                <span className='text-lg antialiased font-serif ml-1'>Youtube</span>
            </div>
            <div className='flex items-center justify-between border border-1 w-96 px-4 py-1 m-auto rounded-full'>
                <input type="text" className='outline-0' />
                <button>
                    <Search size="18" />
                </button>
            </div>
            <div>
                <span>USERNAME</span>
            </div>
        </div>
    )
}

export default Navbar