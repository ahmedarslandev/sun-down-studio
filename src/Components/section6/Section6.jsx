import React, { useEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Section6() {

    useEffect(() => {

        gsap.to('.scrub-img', {
            top: '15vh',
            ease: 'none',
            scrollTrigger: {
                trigger: '.scrub-img',
                start: 'top 50%',
                end: 'top -30%',
                scrub: 2,
            }

        })

    }, []);
    return (
        <>
            <div id='Studio' className=' w-full h-fit flex items-center justify-center p-10'>
                <div className=' w-full h-[110vh] rounded-xl items-center justify-between bg-black flex'>
                    <div id="left" className=' w-[40%] h-[80%]  flex justify-center flex-col gap-5 items-center'>
                        <div className=' w-full h-fit flex items-center justify-center'>
                            <div className=' flex justify-center items-center flex-col w-[3px] h-full '>
                                <div className=' w-full h-[30%] bg-[rgba(254,51,10)]'></div>
                                <div className=' w-full h-[70%] bg-[#504A45]'></div>
                            </div>
                            <div id='text' className=' px-3 pb-2 capitalize font-bold text-7xl text-[#504A45]'><span className=' text-white'>design</span><br /> project <br /> execution</div>
                        </div>
                        <div className=' word-spacing-3 flex items-center justify-center p-5  w-full h-fit'>
                            <h1 className=' leading-5 text-base w-[26vw] tracking-tight text-[#c7c0bb] font-medium'>Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.</h1>
                        </div>
                    </div>
                    <div id="right" className=' w-[60%] relative h-full rounded-xl overflow-hidden bg-yellow-400'>
                        <img className=' scrub-img w-full h-full absolute scale-125 left-0 object-cover ' src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15e1_Project.webp" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section6
