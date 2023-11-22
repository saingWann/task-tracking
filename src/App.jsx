import React, { useEffect, useState } from "react";
import Headbar from "./component/Headbar";
import Card from "./component/Card";
import Categories from "./component/Categories";
import Sidebar from "./component/Sidebar";
import { api } from "./Api";
import DataContext from "./Context/Contextapi";

const App = () => {
  const [todoArray, setTodoArray] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [edit, setEdit] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});

  const fetchData = async () => {
    const data = await api.get("/todolist");

    setTodoArray(
      data.data.filter(
        (task) => task.moveToTrash === false && task.complete === false
      )
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  // add new task
  const addNewTodoToServer = async (newTask) => {
    await api.post("/todoList", newTask);
    setTodoArray([...todoArray, newTask]);
  };

  // delete task from the api and the state
  const deleteTodo = async (id) => {
    if (confirm("You sure!This task will be remove permently!")) {
      await api.delete(`/todolist/${id}`);
      const newTodo = [...todoArray];
      setTodoArray(newTodo.filter((task) => task.id !== id));
      return;
    }
    return;
  };

  // partial edit
  const editCardItem = async (id) => {
    await api.patch(`/todoList/${id}`, {...taskToEdit});

    const currentTodo = todoArray.map((task) => {
      if (task.id === id) {
        task = {...taskToEdit}
        return task;
      }
      return task;
    });

    setTodoArray(currentTodo);

  };

  // move to bin function
  const moveToTrash = async (id, currentStat) => {
    await api.patch(`/todoList/${id}`, { moveToTrash: !currentStat });

    const currentTodo = todoArray.map((task) => {
      if (task.id === id) {
        task.moveToTrash = !currentStat;
        return task;
      }
      return task;
    });

    setTodoArray(currentTodo.filter((task) => task.moveToTrash === false));
  };

  // partial upadte the data
  const HandleComplete = async (id, currentStat) => {
    await api.patch(`/todoList/${id}`, { complete: !currentStat });

    if (!currentStat) {
      if (confirm("This task will be move to 'Done' section.")) {
        const currentTodo = todoArray.map((task) => {
          if (task.id === id) {
            task.complete = !currentStat;
            return task;
          }
          return task;
        });

        setTodoArray(currentTodo.filter((task) => task.complete === false));
      }
    } else {
      if (confirm("This task will set to undone.")) {
        const currentTodo = todoArray.map((task) => {
          if (task.id === id) {
            task.complete = !currentStat;
            return task;
          }
          return task;
        });

        setTodoArray(currentTodo.filter((task) => task.complete === true));
      }
    }
  };

  // filter by categories
  const renderByType = async (type) => {
    const data = await api.get("/todolist");
    if (type === "All") {
      setTodoArray(
        data.data.filter(
          (task) => task.moveToTrash !== true && task.complete === false
        )
      );
    } else if (type === "Trash bin") {
      setTodoArray(data.data.filter((task) => task.moveToTrash === true));
    } else if (type === "Done") {
      setTodoArray(data.data.filter((task) => task.complete === true));
    } else {
      const currentTodoArray = [...data.data];
      const filteredArray = currentTodoArray.filter(
        (task) =>
          task.type === type &&
          task.moveToTrash === false &&
          task.complete === false
      );
      setTodoArray(filteredArray);
    }
  };

  return (
    <DataContext.Provider
      value={{
        todoArray,
        addNewTodoToServer,
        deleteTodo,
        HandleComplete,
        renderByType,
        activeTab,
        setActiveTab,
        moveToTrash,
        setCurrentPage,
        currentPage,
        editCardItem,
        edit,
        setEdit,
        taskToEdit,
        setTaskToEdit,
        setShowForm,
        showForm,
      }}>
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
  );
};

export default App;
