import React, { useEffect, useState } from 'react'
import MovingTeaxt from './MovingTeaxt'
import gsap from 'gsap'

function Section3() {
    useEffect(() => {
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }


    }, [])
    return (
        <>
            <div id='elem Work' className='elem overflow-x-auto  w-full h-[40vh] relative  flex flex-row flex-nowrap items-center'>
                <div id="mover" className='flex'>

                    <MovingTeaxt text='Experience' left='left-0' />
                    <MovingTeaxt text='Contect' left='left-[58vw]' />
                    <MovingTeaxt text='Enviroment' left='left-[120vw]' />
                    <MovingTeaxt text='Experience' left='left-0' />
                </div>
                <div id="mover" className=' flex'>

                    <MovingTeaxt text='Experience' left='left-0' />
                    <MovingTeaxt text='Contect' left='left-[58vw]' />
                    <MovingTeaxt text='Enviroment' left='left-[120vw]' />
                    <MovingTeaxt text='Experience' left='left-0' />
                </div>
                <div id="mover" className=' flex'>

                    <MovingTeaxt text='Experience' left='left-0' />
                    <MovingTeaxt text='Contect' left='left-[58vw]' />
                    <MovingTeaxt text='Enviroment' left='left-[120vw]' />
                    <MovingTeaxt text='Experience' left='left-0' />
                </div>

            </div>

        </>
    )
}

export default Section3
