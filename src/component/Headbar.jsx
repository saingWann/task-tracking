import { Plus, Search } from 'lucide-react'
import React, { useState } from 'react'
import Form from './Form';

const Headbar = ({addNewTodoToServer}) => {

    const [showForm,setShowForm] = useState(false);


  return (
      <div className='w-[85%] ms-auto  p-4 bg-white shadow-md'>
        {showForm ? 

          <Form setShowForm={setShowForm} showForm={showForm} addNewTodoToServer={addNewTodoToServer}/> 

        : ""}

        <form className='flex justify-center items-center gap-5 w-full'>
            <span className='p-3 flex
            bg-gray-200 rounded-full lg:w-3/4 md:w-3/4'>
            <label htmlFor="search">
            <Search />
            </label>
            <input type="text" id='search' className='bg-transparent w-full focus:outline-none pl-2' placeholder='Search'/>
            </span>
            <button type='button' onClick={() => setShowForm(!showForm)} className='px-4 py-2 bg-green-500 text-white rounded-full font-bold flex items-center gap-2 active:scale-95 hover:bg-green-600'>NEW<Plus size={20} strokeWidth={3}/></button>
        </form>
    </div>
  )
}

export default Headbar