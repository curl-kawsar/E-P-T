import React from 'react'

const SubjectCard = ({sub}) => {
  return (
    <>
    <div className='mx-auto md:mx-0 relative w-full bg-[#bd5afc] flex flex-col py-2 h-20 justify-center text-center rounded-md min-w-[260px] max-w-[270px] overflow-hidden'>
        <div className='w-full flex justify-center text-center gap-2 z-20 text-wrap'>
            <img src={sub.avatar} alt="" className='size-8'/>
            <h2 className='text-white text-2xl font-semibold tracking-wider'>{sub.subject}</h2>
        </div>
        <img src="./Subject-Vector.png" alt="" className='absolute bottom-0'/>
    </div>
    </>
  )
}

export default SubjectCard