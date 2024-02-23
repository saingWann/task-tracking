import React from "react";
import { Headbar, Card, Sidebar, FormGroup } from "../component/index";

const TasksShowCasePage = () => {
  return (
    <>
      <header>
        <Headbar />
      </header>

      <aside>
        <Sidebar />
      </aside>

      <section>
        <FormGroup />
      </section>

      <section>
        <Card />
      </section>
    </>
  );
};

export default TasksShowCasePage;
