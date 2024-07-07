import React from 'react'

function Section1() {
    return (
        <>
            <div className=' relative w-full h-[90vh] flex flex-col'>
                <div className=' relative w-full h-[98%] flex'>
                    <div id="left" className=' flex px-10 w-[50%] h-[85%] justify-start items-end '>
                        <h1 className=' word-spacing-1 leading-7 pb-2 font-semibold text-[2vw] tracking-tighter w-[60%]'>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.</h1>
                    </div>
                    <div id="right" className=' flex  px-10 w-[50%] h-[85%] justify-end items-end '>
                        <div className=' flex flex-col w-full justify-end h-[80%]'>
                            <div className=' spans flex justify-end relative  top-[15px] sm:leading-7 pb-1 font-bold text-[70px] sm:text-[100px] lg:text-[160px] pr-5  h-[15%] sm:h-[20%] lg:h-[33%]'>SPACES</div>
                            <div className=' spans flex justify-end relative  top-[15px] sm:leading-7 pb-1 font-bold text-[70px] sm:text-[100px] lg:text-[160px] pr-5  h-[15%] sm:h-[20%] lg:h-[33%]'>THAT</div>
                            <div className=' spans flex justify-end relative  top-[15px]  sm:leading-7 pb-1  font-bold text-[70px] sm:text-[100px] lg:text-[160px] pr-5  h-[15%] sm:h-[20%] lg:h-[33%]'>INSPIRE</div>
                        </div>
                    </div>
                </div>
                <div className=' w-full h-fit flex justify-center items-center'>
                <hr className=' w-[95%]  h-[2px] bg-zinc-400 '/>
                </div>
            </div>
        </>
    )
}

export default Section1
