import { useEffect, useState } from "react";
import { api } from "./Api";
import DataContext from "./Context/Contextapi";
import { Headbar, Card, Sidebar, FormGroup } from "./component/index";
import { fetchData } from "./redux/taskDataSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [todoArray, setTodoArray] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const activeTab = useSelector((state) => state.activeTab);

  const fetchData1 = async () => {
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

  // useEffect(() => {
  //   fetchData();
  //   // if (todoArray.length) renderByType(activeTab);
  // }, [isChanged]);

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.allTasks);

  useEffect(() => {
    dispatch(fetchData());
    // console.log(selectAllData);
    console.log(data);
  }, [dispatch]);

  const handleAdd = () => {
    dispatch(addData({ name: "New Item" }));
  };

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

  return (
    <DataContext.Provider
      value={{
        todoArray,
        addNewTodoToServer,
        deleteTodo,
        HandleComplete,
        setTodoArray,
        moveToTrash,
        editCardItem,
        taskToEdit,
        setTaskToEdit,
      }}
    >
      <main>
        <header>
          <Headbar />
        </header>

        <aside>
          <Sidebar />
        </aside>

        <section>
          <FormGroup />
        </section>

        <div>
          <Card />
        </div>
      </main>
    </DataContext.Provider>
  );
};

export default App;
