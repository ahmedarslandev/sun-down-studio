import React, { useEffect } from 'react'
import Project from './Project'
import Button from '../Navbar/Button'
function Section5() {
  useEffect(() => {
    const lists = document.querySelectorAll('.hoverLists')
    lists.forEach((e) => {
      e.addEventListener('mousemove', () => {
        const div = e.querySelector('.imgDiv')
        div.style.display = 'block'
        div.style.transform = 'translate(50%,-50%)'
        div.style.top = '50%'
        div.style.left = '50%'
      })
      e.addEventListener('mouseleave', () => {
        const div = e.querySelector('.imgDiv')
        div.style.display = 'none'
      })
    })
    console.log(lists)
  }, [])
  return (
    <>
      <div className=' flex flex-col gap-20 relative z-10 w-full min-h-screen  '>

        <div className=' flex px-10 gap-1 w-full h-fit items-center'>
          <div className=' w-3 h-3 bg-[rgb(254,51,10)] rounded-full '></div>
          <h1 className=' uppercase  '>featured projects</h1>
        </div>

        <div className=' flex flex-col'>
          <Project title={'Play New Kidivision'} company={'Nike'} catagorie={"Enviroment"} file={
            <video loop='true' muted='true' autoPlay='true'
              className=" object-cover h-full w-full"
              src="https://player.vimeo.com/progressive_redirect/playback/836176806/rendition/1080p/file.mp4?loc=external&amp;signature=8d5d79d41d6792a94d0354d28a4fb548f948a98a439a3830f1d4c97574df26e5" />
          } />
          <Project title={'50th Anniversary'} company={'Nike'} catagorie={"Enviroment"} file={
            <video loop='true' muted='true' autoPlay='true'
              className=" object-cover h-full w-full"
              src="https://player.vimeo.com/progressive_redirect/playback/836176806/rendition/1080p/file.mp4?loc=external&amp;signature=8d5d79d41d6792a94d0354d28a4fb548f948a98a439a3830f1d4c97574df26e5" />
          } />
          <Project title={'SOHO 2023'} company={'CONVERSE'} catagorie={"Enviroment"} file={
            <video loop='true' muted='true' autoPlay='true'
              className=" object-cover h-full w-full"
              src="https://player.vimeo.com/progressive_redirect/playback/836176806/rendition/1080p/file.mp4?loc=external&amp;signature=8d5d79d41d6792a94d0354d28a4fb548f948a98a439a3830f1d4c97574df26e5" />
          } />
          <Project title={'Markers Studio HOI'} company={'AFTERPAY'} catagorie={"Experiental"} file={
            <video loop='true' muted='true' autoPlay='true'
              className=" object-cover h-full w-full"
              src="https://player.vimeo.com/progressive_redirect/playback/836176806/rendition/1080p/file.mp4?loc=external&amp;signature=8d5d79d41d6792a94d0354d28a4fb548f948a98a439a3830f1d4c97574df26e5" />
          } />
          <Project title={'SOHO NYC'} company={"ARC'TERYX"} catagorie={"Enviroment"} file={
            <video loop='true' muted='true' autoPlay='true'
              className=" object-cover h-full w-full"
              src="https://player.vimeo.com/progressive_redirect/playback/836176806/rendition/1080p/file.mp4?loc=external&amp;signature=8d5d79d41d6792a94d0354d28a4fb548f948a98a439a3830f1d4c97574df26e5" />
          } />
          <Project title={'Air Force 12021'} company={'Nike'} catagorie={"Enviroment"} file={
            <video loop='true' muted='true' autoPlay='true'
              className=" object-cover h-full w-full"
              src="https://player.vimeo.com/progressive_redirect/playback/836176806/rendition/1080p/file.mp4?loc=external&amp;signature=8d5d79d41d6792a94d0354d28a4fb548f948a98a439a3830f1d4c97574df26e5" />
          } />


          <div className=' p-5'>
            <Button title={'All Projects →'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Section5
