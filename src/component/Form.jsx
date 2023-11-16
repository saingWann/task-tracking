import { Smile } from 'lucide-react'
import React, { useState } from 'react'


const Form = ({setShowForm,showForm}) => {

  
  const [priority, setPriority] = useState('');
  const [type, setType] = useState('');
  
  const handleSubmitForm = (e) => {
      e.preventDefault();
      setShowForm(!showForm)

  }

  const priorityHandleChange = (event) => {
    setPriority(event.target.value);
    console.log(event.target.value);

  };

  const typeHandleChange = (event) => {
    setType(event.target.value);
    console.log(event.target.value);

  };

  return (
    <div className='w-full h-screen top-0 left-0 fixed flex justify-center items-center bg-black bg-opacity-25 '>
      <form onSubmit={(e) => handleSubmitForm(e)} className="lg:w-1/3 md:w-1/2 bg-white flex flex-col  w-full md:py-8 mt-8 md:mt-0 p-10">
      <h2 className="text-gray-900 text-xl mb-1 font-medium">Add new todo</h2>
      <p className="leading-relaxed text-sm border-b-2 pb-2 mb-5 text-gray-600">Let me walk through the day with you </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="font-semibold">Title</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 mt-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="font-semibold">Priority</label>
        <select value={priority} onChange={(e) => priorityHandleChange(e)} id="select-1" className="mt-2 p-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
        <option disabled={true} value="">
          -- Set the priority --
        </option>
      <option value="low">Low</option>
      <option value="mid">Mid</option>
      <option value="high">High</option>
    </select>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="font-semibold">Priority</label>
        <select  value={type} onChange={(e) => typeHandleChange(e)}  id="select-1" className="mt-2 p-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
        <option disabled={true} value="">
          -- Choose the type --
        </option>
      <option>Home</option>
      <option>Personal</option>
      <option>Bussiness</option>
      <option>Study</option>
    </select>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="font-semibold">Detail</label>
        <textarea id="message" name="message" className="w-full mt-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        <p className='absolute bottom-5 right-5 text-xs text-gray-400'>Characters( 0/100 )</p>
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Now</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </form>
    </div>
  )
}

export default Form