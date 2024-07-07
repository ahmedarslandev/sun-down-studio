import React from 'react'
import Motion from '../motiondiv/Motion'

function Section2() {
    return (
        <>
            <div className=' relative flex justify-center items-center p-10  w-full h-fit min-h-screen'>
                <Motion classes={` absolute top-[-20%] right-[40%]`} parentBorder=' rounded-l-full' size=' w-[50vw] h-[30vw]' />
                <div className=' w-full relative z-10 h-full rounded-2xl overflow-hidden'>
                    <img className=' w-full absolute -z-10 h-full object-cover' src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://media.istockphoto.com/id/1443409611/photo/man-on-stone-on-the-hill-and-beautiful-mountains-in-haze-at-colorful-sunset-in-autumn.jpg?s=1024x1024&w=is&k=20&c=_kr-m_0O3Z7T8Nc5z2RbbdBZBlX6f2y9i0UvVMEBYYk=" alt="" />
                    <video className=' w-full h-full  z-10 object-cover' loop muted autoPlay src="https://player.vimeo.com/progressive_redirect/playback/822063732/rendition/1080p/file.mp4?loc=external&amp;signature=79851f90dc501a79b69488c261bfb3c1db78d45a4eba6d058173e6f9576f6186"></video>
                </div>

            </div>
        </>
    )
}

export default Section2
