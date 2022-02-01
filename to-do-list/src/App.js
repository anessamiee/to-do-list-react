import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";
import SideBar from "./components/SideBar";
import { useState } from "react";

var id = 1;
const tasks = [
  {
    title: "Title 1",
    text: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    state: "inProgress",
    id: id++,
  },
  {
    title: "Title 2",
    text: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    state: "blocked",
    id: id++,
  },
  {
    title: "Title 3",
    text: "lorem ipsum dolor sit amet consectetur adipiscing elit",
    state: "done",
    id: id++,
  },
];

function App() {
  const [task, setTask] = useState(tasks);
  function updateState(id, newState) {
    let i = 0;
    for (let t of task) {
      if (t.id == id) {
        let temp = task;
        temp[i].state = newState;
        setTask(temp);
        break;
      }
      i++;
    }
  }
  function addTask(title, text) {
    const newArr = task.slice();
    newArr.splice(0, 0, { title: title, text: text, state: "toDO", id: id++ });
    setTask(newArr);
  }
  const BrowserHistory = require("react-router-dom").default;
  return (
    <div className="App">
      <BrowserRouter history={BrowserHistory}>
        <SideBar />
        <Routes>
          <Route
            exact
            path="/Tasks"
            element={<Tasks task={task} onChange={updateState} />}
          />
          <Route
            exact
            path="/NewTask"
            element={<NewTask onChange={addTask} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
