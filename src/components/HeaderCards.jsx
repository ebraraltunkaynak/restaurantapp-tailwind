import React from 'react'

const HeaderCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* headline card */}
        <div className=' rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white ' >
                    <p className='font-bold text-2xl  px-2 pt-4'> lorem ipsum dolor</p>
                    <p className='px-2'> lorem ipsum</p>
                    <button className='border-white bg-white hover:bg-red-500 text-black  mx-2 absolute bottom-4'>Sipariş ver </button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
        <div className=' rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white ' >
                    <p className='font-bold text-2xl  px-2 pt-4'> lorem ipsum dolor</p>
                    <p className='px-2'> lorem ipsum</p>
                    <button className='border-white bg-white hover:bg-red-500 text-black  mx-2 absolute bottom-4'>Sipariş ver </button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80" alt="" />
        </div>
        <div className=' rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white ' >
                    <p className='font-bold text-2xl  px-2 pt-4'> lorem ipsum dolor</p>
                    <p className='px-2'> lorem ipsum</p>
                    <button className='border-white bg-white hover:bg-red-500 text-black  mx-2 absolute bottom-4'>Sipariş ver </button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" alt="" />
        </div>
    
    </div>
  )
}

export default HeaderCards