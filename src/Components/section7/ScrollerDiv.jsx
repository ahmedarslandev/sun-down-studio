import React from 'react'

function ScrollerDiv({imgSrc,text}) {
    return (
        <>
            <div className=' flex flex-col gap-5 w-[22vw] fit border-l-[1px] border-[rgb(168,168,170)] '>
                <div className=' w-full h-fit px-5'>

                    <img className='' src={`${imgSrc}`} alt="" />
                </div>
                <div className=' px-5 w-full h-fit'>
                    <h1 className=' text-[16px] text-[rgb(22,22,22)] leading-6 word-spacing-3 tracking-tighter'>{text}</h1>
                </div>
            </div>
        </>
    )
}

export default ScrollerDiv
