import React from 'react'

const wellcomePage = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex-none w-screen h-[60px] mt-0 bg-black'>
            <h1>Header</h1>
        </div>
        <div className='grow'>
            <div className='w-3/4 h-[400px] mt-10 mb-10 m-auto bg-gray-400 rounded-[50px] drop-shadow-2xl'>
                <div className='font-bold tracking-widest text-center text-transparent text-7xl bg-gradient-to-r from-purple-900 via-blue-900 to-orange-900 bg-clip-text'>
                    NOTE MASTER
                </div>
            </div>
        </div>
        <div className='flex-none w-screen h-[60px] mb-0 bg-black'>
        <h1>footer</h1>
        </div>
    </div>
  )
}

export default wellcomePage