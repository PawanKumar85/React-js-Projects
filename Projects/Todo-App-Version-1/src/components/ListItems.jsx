function List({itemname,date,btnName})
{
    return(
        <div className="row todo-row">
          <div className="col-6">
            <p className="fw-bold">{itemname}</p>
          </div>
          <div className="col-4">
            <p>{date}</p>
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-danger todo-button">
              {btnName}
            </button>
          </div>
        </div>
    );
}

export default List;