import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4 z-[100] absolute  w-full'>
            <h1 className='text-red-600 text-xl md:text-4xl font-bold cursor-pointer'>NETFLIX</h1>
            <div className='flex'>
                <button className='text-white pr-4 font-semibold hidden md:block'>Sign In</button>
                <button className='bg-red-600 px-6 py-2 text-white rounded-xl font-semibold hidden md:block'>Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar