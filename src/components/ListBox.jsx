import "./listBox.css";

function ListBox() {
  return (
    <div className="listBox">
      <input className="listCheck" type="checkbox" />
      <p className="tasktitle">Task Title</p>
      <div className="btnGroup">
        <button className="btnEdit">Edit</button>
        <button className="btnDelete">Delete</button>
      </div>
    </div>
  );
}

export default ListBox;
