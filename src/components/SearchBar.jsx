import { useState } from "react";
import "./searchBar.css";

export default function SearchBar() {
  const [userinput, setUserInput] = useState("");

  const InputChangeHandler = (event) => {
    setUserInput(event.target.value);
    console.log(userinput);
  };

  const AddTaskHandler = () => {
    console.log(userinput);
    setUserInput("");
  };
  return (
    <div>
      <input
        className="inputBar"
        type="text"
        onChange={InputChangeHandler}
        value={userinput}
      />
      <button className="addTaskBtn" onClick={AddTaskHandler}>
        ADD
      </button>
    </div>
  );
}
