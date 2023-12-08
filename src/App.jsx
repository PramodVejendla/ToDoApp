import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import ListBox from "./components/ListBox";
import List from "./components/List";

const Dummy_Tasks = [
  { id: 1, title: "Toilet Paper" },
  { id: 2, title: "New TV" },
  {
    id: 3,
    title: "Car Insurance",
  },
  {
    id: 4,
    title: "New Desk (Wooden)",
  },
];

function App() {
  const [todoList, setTodoList] = useState(Dummy_Tasks);

  const saveTaskHandler = (newtodo) => {
    setTodoList((prevList) => {
      return [...prevList, newtodo];
    });
    console.log(todoList);
  };

  const deleteTaskHandler = (id) => {
    const newList = todoList.filter((data) => data.id !== id);
    setTodoList(newList);
  };
  return (
    <>
      <div className="container">
        <Header />
        <List onUpdatedTaskInput={saveTaskHandler} />
        {todoList.map((item) => {
          return (
            <ListBox
              id={item.id}
              key={item.id}
              title={item.title}
              deleteTask={() => deleteTaskHandler(item.id)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
