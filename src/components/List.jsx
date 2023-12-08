import SearchBar from "./SearchBar";

function List(props) {
  const idTaskHandler = (newtodo) => {
    const updatedTaskData = {
      ...newtodo,
      id: Math.floor(Math.random() * 10000),
    };
    props.onUpdatedTaskInput(updatedTaskData);
  };
  return (
    <div>
      <SearchBar onTaskInput={idTaskHandler} />
    </div>
  );
}

export default List;
