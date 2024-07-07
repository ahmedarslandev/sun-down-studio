import React from 'react'

function FooterLinks() {
  return (
    <>
      <div id='links' className=' -z-10 pt-10   w-full h-[20vh]  bg-transparent fixed  left-0 bottom-0 '>
        <div className=' w-full h-[0px] flex  justify-center'>
          <hr className=' w-[93vw] h-full box-border outline-none border-gray-600 -border-[.1px] ' />
        </div>
        <div className=' flex items-center w-full h-[80%]  pt-7 relative bottom-0 justify-between px-9'>
          <h1 className=' text-[16px] font-medium text-gray-300 tracking-tight'>Copyright&copy;Sundown Studio</h1>
          <div className=' flex gap-2 items-center justify-center text-[16px] font-medium text-gray-300 tracking-tight'><i className="fab fa-linkedin"> </i><h1>Linkedin</h1></div>
          <div className=' flex gap-2 items-center justify-center text-[16px] font-medium text-gray-300 tracking-tight'><i className="fab fa-instagram"> </i><h1>Instagram</h1></div>
          <div className=' flex gap-2 items-center justify-center text-[16px] font-medium text-gray-300 tracking-tight'><i className="fab fa-facebook"> </i><h1>Facebook</h1></div>
          <div className=' flex gap-2 items-center justify-center text-[16px] font-medium text-gray-300 tracking-tight'><i className="fab fa-whatsapp"> </i><h1>Whatsapp</h1></div>
        </div>
      </div>
    </>
  )
}

export default FooterLinks
