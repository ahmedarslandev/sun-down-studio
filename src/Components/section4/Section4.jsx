import React from 'react'
import Motion from '../motiondiv/Motion'
function Section4() {
    return (
        <>
            <div className=' relative flex items-center '>
            <Motion classes={` relative top-[40vh] w-[60vw] h-[40vw] left-[20%]`} parentBorder=' rounded-full' size={` w-[30vw] h-[30vw]`} />
                <div className='absolute left-[5%]'>
                    <div className=' w-[60vw] h-[60vh] '>
                        <h1 className=' font-bold text-7xl tracking-tighter word-spacing-2 leading-[4.4rem]'>
                            We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.
                        </h1>
                    </div>
                </div>

                <div className=' absolute top-[40vh]  right-5 gap-7 flex flex-col items-center justify-start  w-[25vw] h-[60vh]'>
                    <div className=' w-[90%] h-[45%] overflow-hidden rounded-lg'>
                        <img className=' w-full h-full object-cover' src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb.webp" alt="" />
                    </div>
                    <h1 className=' text-[15px]  tracking-tight px-5 leading-[1.4rem] text-zinc-700'>
                        We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Section4
