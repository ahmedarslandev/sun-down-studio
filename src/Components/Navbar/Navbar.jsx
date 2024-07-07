import React from 'react'
import Button from './Button'

function Navbar() {
    return (
        <>
            <nav className=' w-full flex justify-between items-center py-10'>
                <div className=' w-[30vw] h-16 px-10' id="left">
                    <img className=' w-[41%]' src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="" />
                </div>

                <div id='lists' className=' flex justify-between items-center gap-5 px-10'>
                  <Button title='Work'/>
                  <Button title='Studio'/>
                  <Button title='Contact'/>
                </div>
            </nav>

        </>
    )
}

export default Navbar
