function InputField() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 ">
          <input type="text" placeholder="Enter Item" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success todo-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default InputField;
