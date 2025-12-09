

import React from 'react'

const GradeCard = ({level}) => {
  return (
    <div  className='mx-auto p-3 shadow-md rounded-lg bg-white flex flex-col justify-center text-center gap-3 min-w-[260px] max-w-[320px] md:mx-0'>
        <div className='flex justify-center text-center bg-gradient-to-b from-[#01B7FD] to-[#007FB0] overflow-hidden h-24 py-2 px-4 rounded-lg'>
            <img src={level.avatar} alt="" className=' object-center h-40'/>
        </div>

        <h1 className='w-full flex justify-center text-center text-[#01B7FD] font-bold text-2xl tracking-wider'>{level.grade}</h1>

        <div>
            <button className='text-[#0199b3] bg-white ring-2 ring-[#0199d3] px-6 py-1 rounded-md text-lg font-normal tracking-wider hover:text-white hover:bg-[#0199d3] transition ease-linear duration-100'>Learn more</button>
        </div>
    </div>
  )
}

export default GradeCard