import React from 'react'
import { Link } from 'react-router-dom'
function Button({ title }) {
    return (
        <>


            <a href={`#${title}`} className=' buttons relative overflow-hidden w-fit h-fit flex justify-center items-center rounded-3xl  border-[1px] px-5 pb-3 pt-1 border-zinc-400'>
                <li className=' list-none mix-blend-normal  relative font-normal text-base tracking-tighter '>
                    {title}

                </li>
            </a>
        </>
    )
}

export default Button
{ }