import React from 'react'

function StudentInfo({name, points, completion, email, isBold}) {
  return (
    <div className={` bg-white w-full h-min flex justify-between items-center [&>*]:text-normal_size [&>*]:text-black px-6 py-6 ${isBold? "font-medium" : " "}`}>
      <div className='flex gap-4 items-center'>
        <input className='rounded-3xl' type='checkbox'></input>
        <p className=' w-[20rem]'>{name}</p>
      </div>
      <p className=' w-[10rem] text-center'>{points}</p>
      <p className=' w-[10rem] text-center'>{completion}</p>
      <p className=' w-[16rem] text-center'>{email}</p>
    </div>
  )
}

export default StudentInfo