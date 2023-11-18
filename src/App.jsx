import React, { useEffect, useState } from 'react'
import Headbar from './component/Headbar'
import Card from './component/Card'
import Categories from './component/Categories'
import Sidebar from './component/Sidebar'
import { api } from './Api'
import DataContext from './Context/Contextapi'

const App = () => {

  const [todoArray,setTodoArray] = useState([]);

  const fetchData = async() => {

    const data = await api.get("/todolist")
    setTodoArray(data.data)
    
  }
  
  useEffect( ()=>{
    fetchData()
    
  },[])
  console.log(todoArray);

  const addNewTodoToServer = async(newTask) => {
    await api.post("/todoList",newTask)
    setTodoArray([...todoArray,newTask])
  }


  // delete task from the api and the state
  const deleteTodo = async(id) => {
    console.log(typeof id);
    await api.delete(`/todolist/${id}`)
    const newTodo = [...todoArray];
    setTodoArray(newTodo.filter((task)=> task.id !== id));

  }

  // partial upadte the data 
  const HandleComplete = async(id,currentStat) => {

    await api.patch(`/todoList/${id}`,{complete:!currentStat});
  
    const currentTodo = todo.filter((task) => {
      if(task.id === id){
        task.complete = !currentStat;
        return task
      }
      return todo;
    });
    
    setTodo([...currentTodo])

  }

  return (
    <DataContext.Provider value={{todoArray,addNewTodoToServer,deleteTodo }}>
      
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
        <Card />
      </div>

    </DataContext.Provider>
  )
}

export default App