import { Smile } from 'lucide-react'
import React from 'react'

const Form = ({setShowForm,showForm}) => {

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setShowForm(!showForm)

    }
  return (
    <div className='w-full h-screen top-0 left-0 fixed flex justify-center items-center bg-black bg-opacity-25 '>
      <form onSubmit={(e) => handleSubmitForm(e)} class="lg:w-1/3 md:w-1/2 bg-white flex flex-col  w-full md:py-8 mt-8 md:mt-0 p-10">
      <h2 class="text-gray-900 text-xl mb-1 font-medium">Add new todo</h2>
      <p class="leading-relaxed text-sm border-b-2 pb-2 mb-5 text-gray-600">Let me walk through the day with you </p>
      <div class="relative mb-4">
        <label for="name" class="font-semibold">Title</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 mt-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div class="relative mb-4">
        <label for="email" class="font-semibold">Priority</label>
        <select id="select-1" class="mt-2 p-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
      <option selected>Set the priority</option>
      <option>Low</option>
      <option>Mid</option>
      <option>High</option>
    </select>
      </div>
      <div class="relative mb-4">
        <label for="email" class="font-semibold">Priority</label>
        <select id="select-1" class="mt-2 p-2 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
      <option selected>Set type of task</option>
      <option>Home</option>
      <option>Personal</option>
      <option>Bussiness</option>
      <option>Study</option>
    </select>
      </div>
      <div class="relative mb-4">
        <label for="message" class="font-semibold">Detail</label>
        <textarea id="message" name="message" class="w-full mt-2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        <p className='absolute bottom-5 right-5 text-xs text-gray-400'>Characters( 0/100 )</p>
      </div>
      <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Now</button>
      <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </form>
    </div>
  )
}

export default Form