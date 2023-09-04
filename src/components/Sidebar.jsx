import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const { isOpen } = useSelector(state => state.app);
    //early return 
    if (!isOpen) return null;
    return (

        <div className='col-span-1 shadow-lg divide-y divide-dashed px-8 h-96'>
            <div>
                <ul className='mt-4 mb-4'>
                    <li className='mb-2'>Home</li>
                    <li className='mb-2'>Shorts</li>
                    <li className='mb-2'>Subscriptions</li>
                </ul>
            </div>
            <div>
                <ul className='mt-4 mb-4'>
                    <li className='mb-2'>Library</li>
                    <li className='mb-2'>Videos</li>
                    <li className='mb-2'>Movies</li>
                </ul>
            </div>
            <div>
                <ul className='mt-4 mb-4'>
                    <li className='mb-2'>Music</li>
                    <li className='mb-2'>News</li>
                    <li className='mb-2'>Sports</li>
                </ul>
            </div>
        </div>
    )
}



export default Sidebar