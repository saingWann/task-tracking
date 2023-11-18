import React from 'react'
import { categories } from '../constant'

const Categories = () => {
  
  return (
    <div className='w-[85%] ms-auto mt-10  px-14 '>
        <div className='flex justify-between gap-5 border-b-2 pb-5'>
          <div className='flex gap-3'>

            {categories.map((category) => (
              <button key={category} className='font-bold uppercase tracking-widest w-fit hover:opacity-70 active:scale-95'>{category}</button>
              ))}
              
          </div>
        </div>
      
    </div>
  )
}

export default Categories