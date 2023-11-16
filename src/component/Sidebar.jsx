import React from 'react'
import { sidebarMenu } from '../constant'
import { Copyright } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='w-[15%] min-h-screen flex flex-col justify-between fixed bg-gray-100 top-0'>
       <div>
       <div className='flex flex-col w-full p-5'>
            <p className='font-bold text-2xl'>KeepOnTrack.</p>
            <p className='capitalize text-sm text-gray-500'>stay progressive</p>    
        </div>
        <hr />
        <div className='flex flex-col w-full p-5'>
            <span className=' flex flex-col items-start gap-4 '>
                {sidebarMenu.map((menu) => (
                    <button className='font-bold uppercase w-fit hover:opacity-70 active:scale-95'>{menu}</button>
                ))}

            </span>
        </div>
       </div>

       <div className='p-5'>
        <p className='font-semibold capitalize text-sm text-gray-500 flex gap-1'>privacy terms<Copyright /></p>
        <p className='font-semibold capitalize text-sm text-gray-500' >all right reserved</p>
       </div>

    </div>
  )
}

export default Sidebar