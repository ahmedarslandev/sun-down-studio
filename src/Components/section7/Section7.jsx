import React, { useEffect, useState } from 'react'
import ScrollerDiv from './ScrollerDiv'
import { Footer } from '../exports'
import { FooterLinks } from '../exports'
function Section7() {
  useEffect(() => {
    const follower = document.querySelector('#mouseFollower')
    document.querySelector('.parent').addEventListener('mousemove', (dets) => {
      follower.style.top = dets.y - follower.clientHeight / 2 - 70 + 'px'
      follower.style.left = dets.x - follower.clientWidth / 2 + 'px'
      follower.style.scale = 1
      follower.style.display = 'flex'
    })
    document.querySelector('.parent').addEventListener('mouseleave', () => {
      follower.style.scale = 0
      follower.style.display = 'none'
    })

  },);
  return (
    <>
      <div className=' relative'>
        <div className=' parent z-20 select-none cursor-none relative overflow-hidden flex flex-col items-center justify-start w-full lg:h-[80vh] gap-7 px-5 py-10'>
          <div id='mouseFollower' className=' cursor-none  absolute z-50 top-0 left-0 w-[7vw] h-[7vw]  items-center justify-center rounded-full bg-[rgb(254,51,10)]'>
            <div className=' flex w-fit h-fit'>
              <img className=' w-6 h-6' src="https://img.icons8.com/?size=50&id=9149&format=png" alt="" />
              <img className=' w-6 h-6 rotate-180' src="https://img.icons8.com/?size=50&id=9149&format=png" alt="" />
            </div>
          </div>
          <div className=' flex px-20 gap-1 w-full h-fit items-center'>
            <div className=' w-3 h-3 bg-[rgb(254,51,10)] rounded-full '></div>
            <h1 className=' uppercase  '>Who we work with</h1>
          </div>

          <div id='scroll-off' className='relative flex px-20  overflow-x-scroll  items-center top-0 left-0 w-full h-fit gap-2'>
            <div className=' flex gap-10'>
              <ScrollerDiv imgSrc={`https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg`} text={`Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.`} />
              <ScrollerDiv imgSrc={`https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg`} text={`Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.`} />
              <ScrollerDiv imgSrc={`https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg`} text={`Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.`} />
              <ScrollerDiv imgSrc={`https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg`} text={`Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.`} />
              <ScrollerDiv imgSrc={`https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg`} text={`Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.`} />
              <ScrollerDiv imgSrc={`https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg`} text={`Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country.`} />
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Section7
