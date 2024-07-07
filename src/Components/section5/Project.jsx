import React from 'react'

function Project({ title, company, catagorie, file,img }) {

    return (
        <>
            <div  className='hoverLists relative z-20 w-full h-fit flex justify-between hover1 items-center border-zinc-400 py-5 border-b-[1px]'>
                <div className=' px-10 py-4'>
                    <h1 className=' text-6xl tracking-tighter word-spacing-2 font-bold '>{title}</h1>
                </div>
                <div className='imgDiv select-none hidden fixed   overflow-hidden w-[23vw] rounded-xl h-[63vh] '>
                    <img className=' w-full absolute -z-10 h-full object-cover' src="https://images.unsplash.com/photo-1702610274539-c659ad8d5031?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    {file}
                </div>
                <div className=' flex  flex-col'>
                    <h1 className=' relative  top-2 tracking-tighter text-[16px] flex justify-end px-10'>{company}</h1>
                    <h1 className=' relative  top-0 tracking-tighter flex text-[15px] font-normal text-zinc-600 justify-end px-10'>{catagorie}</h1>
                </div>
            </div>
        </>
    )
}

export default Project
