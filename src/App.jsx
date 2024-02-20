import { useEffect, useState } from "react";
import { api } from "./Api";
import DataContext from "./Context/Contextapi";
import { Headbar, Card, Sidebar, FormGroup } from "./component/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentData, renderByType } from "./redux/currentTasks";

const App = () => {
  const [taskToEdit, setTaskToEdit] = useState({});

  const dispatch = useDispatch();

  // const allTask = useSelector(allTasks);
  useEffect(() => {
    dispatch(fetchCurrentData());
    // dispatch(renderByType(activeTab));
  }, []);

  return (
    <DataContext.Provider
      value={{
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
