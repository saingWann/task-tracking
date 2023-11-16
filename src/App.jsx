import React, { useEffect, useState } from 'react'
import Headbar from './component/Headbar'
import Card from './component/Card'
import Categories from './component/Categories'
import Sidebar from './component/Sidebar'
import { api } from './Api'
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [todoArray,setTodoArray] = useState([]);
  const [newTodo,setNewTodo] = useState({})

  useEffect( ()=>{
    
    const fetchData = async() => {

      const data = await api.get("/todolist")
      console.log(data.data);
      setTodoArray(data.data)
    }
    fetchData()

  },[])

  return (
    <main>
      
      <header>
        <Headbar />
      </header>

      <aside>
        <Sidebar />
      </aside>
      
      <section>
        <Categories />
      </section>

      <div>
        <Card todo={todoArray}/>
      </div>

    </main>
  )
}

export default App