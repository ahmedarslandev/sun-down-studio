import React from 'react'

function MovingTeaxt({text , left}) {
  return (
    <>
      <div className={`move relative select-none left-0 top-0  px-5 flex w-fit gap-5 h-fit justify-center items-center`}>
        <div className=' w-14 h-14 rounded-full bg-[rgb(254,51,10)]'></div>
        <h1 className=' text-[10vw] h-[17vw] font-bold '>{text}</h1>
      </div>
    </>
  )
}

export default MovingTeaxt
