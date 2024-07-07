import React from 'react'

function Motion({classes , parentBorder , size , blur=20}) {
  return (
    <>
      <div className={`${classes}`}>
            <div className={`bg-[rgb(254,51,10)  ${parentBorder + " "+ size} absolute motionDiv1 top-[0%] left-0`}></div>
            <div className={`bg-[rgb(254,65,10)]  blur-[20px] absolute motionDiv2 top-[0%] left-0`}></div>
            <div className={`bg-[rgb(254,51,10)] blur-[20px] absolute motionDiv3 top-[20%] left-[100px]`}></div>
      </div>
    </>
  )
}

export default Motion
