import "./listBox.css";

function ListBox(props) {
  return (
    <div className="listBox">
      <input className="listCheck" type="checkbox" />
      <p className="tasktitle">{props.title}</p>
      <div className="btnGroup">
        <button className="btnEdit" onClick={props.editTask}>
          Edit
        </button>
        <button className="btnDelete" onClick={props.deleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListBox;
