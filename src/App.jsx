import React, { useEffect, useState } from 'react'
import Headbar from './component/Headbar'
import Card from './component/Card'
import Categories from './component/Categories'
import Sidebar from './component/Sidebar'
import { api } from './Api'

const App = () => {

  const [todoArray,setTodoArray] = useState([]);

  const fetchData = async() => {

    const data = await api.get("/todolist")
    setTodoArray(data.data)

  }

  useEffect( ()=>{
    fetchData()

  },[])

  const addNewTodoToServer = async(newTask) => {
    await api.post("/todoList",newTask)
    setTodoArray([...todoArray,newTask])
  }

  return (
    <main>
      
      <header>
        <Headbar addNewTodoToServer={addNewTodoToServer}/>
      </header>

      <aside>
        <Sidebar />
      </aside>
      
      <section>
        <Categories />
      </section>

      <div>
        <Card todo={todoArray} />
      </div>

    </main>
  )
}

export default App