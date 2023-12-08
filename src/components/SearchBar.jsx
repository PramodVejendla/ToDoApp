import { useState } from "react";
import "./searchBar.css";

export default function SearchBar(props) {
  const [userinput, setUserInput] = useState("");

  const InputChangeHandler = (event) => {
    setUserInput(event.target.value);
    // console.log(userinput);
  };

  const AddTaskHandler = (event) => {
    event.preventDefault();

    const taskInput = {
      title: userinput,
    };
    // console.log(taskInput);
    props.onTaskInput(taskInput);

    setUserInput("");
  };
  return (
    <form onSubmit={AddTaskHandler}>
      <input
        className="inputBar"
        type="text"
        onChange={InputChangeHandler}
        value={userinput}
      />
      <button className="addTaskBtn">ADD</button>
    </form>
  );
}
