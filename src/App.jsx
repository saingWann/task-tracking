import React, { useEffect, useState } from "react";
import Headbar from "./component/Headbar";
import Card from "./component/Card";
import Categories from "./component/Categories";
import Sidebar from "./component/Sidebar";
import { api } from "./Api";
import DataContext from "./Context/Contextapi";
import FormGroup from "./component/FormGroup";

const App = () => {
  const [todoArray, setTodoArray] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [edit, setEdit] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});
  const [isChanged, setIsChanged] = useState(false);

  const fetchData = async () => {
    const data = await api.get("/todolist");

    // to stay on the last active tab when the component got re-render
    if (activeTab === "Done") {
      setTodoArray(
        data.data.filter(
          (task) => task.moveToTrash === false && task.complete === true
        )
      );
    } else if (activeTab === "Trash bin") {
      setTodoArray(data.data.filter((task) => task.moveToTrash === true));
    } else if (activeTab === "All") {
      setTodoArray(
        data.data.filter(
          (task) => task.moveToTrash === false && task.complete === false
        )
      );
    } else {
      setTodoArray(
        data.data.filter(
          (task) =>
            task.moveToTrash === false &&
            task.complete === false &&
            task.type === activeTab
        )
      );
    }
  };

  useEffect(() => {
    fetchData();
    // if (todoArray.length) renderByType(activeTab);
  }, [isChanged]);

  // add new task
  const addNewTodoToServer = async (newTask) => {
    await api.post("/todoList", newTask);
    // setTodoArray([...todoArray, newTask]);
    setIsChanged(!isChanged);
  };

  // delete task from the api and the state
  const deleteTodo = async (id) => {
    if (confirm("You sure!This task will be remove permently!")) {
      await api.delete(`/todolist/${id}`);
      setIsChanged(!isChanged);
    }
    return;
  };

  // partial edit
  const editCardItem = async (id) => {
    await api.patch(`/todoList/${id}`, { ...taskToEdit });

    setIsChanged(!isChanged);
  };

  // move to bin function
  const moveToTrash = async (id, currentStat) => {
    await api.patch(`/todoList/${id}`, { moveToTrash: !currentStat });

    setIsChanged(!isChanged);
  };

  // partial upadte the data
  const HandleComplete = async (id, currentStat) => {
    if (!currentStat) {
      if (confirm("This task will be move to 'Done' section.")) {
        setIsChanged(!isChanged);
        await api.patch(`/todoList/${id}`, { complete: !currentStat });
      }
    } else {
      if (confirm("This task will set to undone.")) {
        setIsChanged(!isChanged);
        await api.patch(`/todoList/${id}`, { complete: !currentStat });
      }
    }
  };

  const renderByType = (type) => {
    console.log("rerneder and run");
    if (type === "All") {
      setTodoArray(
        todoArray.filter(
          (task) => task.moveToTrash !== true && task.complete === false
        )
      );
    } else if (type === "Trash bin") {
      setTodoArray(todoArray.filter((task) => task.moveToTrash === true));
    } else if (type === "Done") {
      setTodoArray(todoArray.filter((task) => task.complete === true));
    } else {
      const currentTodoArray = [...todoArray];
      const filteredArray = currentTodoArray.filter(
        (task) =>
          task.type === type &&
          task.moveToTrash === false &&
          task.complete === false
      );
      setTodoArray(filteredArray);
    }
  };
  // renderByType(activeTab);

  return (
    <DataContext.Provider
      value={{
        todoArray,
        addNewTodoToServer,
        deleteTodo,
        HandleComplete,
        setTodoArray,
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
      }}
    >
      <header>
        <Headbar />
      </header>

      <aside>
        <Sidebar />
      </aside>

      {/* <section>
        <Categories />
      </section> */}

      <section>
        <FormGroup />
      </section>

      <div>
        <Card />
      </div>
    </DataContext.Provider>
  );
};

export default App;
