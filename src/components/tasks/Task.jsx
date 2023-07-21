const Task = ({task}) => {
    return (
        <div className="col-md-6">
            <div className="card my-2">
                <div className="card-body">
                    <div className="row align-items-center d-flex justify-content-around">
                        <div className="col-md-4 col-sm-4">
                            <img
                                className="img img-fluid rounded border-1 solid"
                                src={task.photo}
                                alt = ""
                            />
                        </div>
                        <div className="col-md-7 col-sm-7">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-dark rounded">
                                    {task.task}
                                </li>
                                <li className="list-group-item list-group-item-dark m-1 rounded">
                                    {task.description}
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                            <button className="btn my-1 btn-warning">
                                <span className="fa fa-eye"></span>
                            </button>
                            <button className="btn my-1 btn-primary">
                                <span className="fa fa-pen"></span>
                            </button>
                            <button className="btn my-1 btn-danger">
                                <span className="fa fa-trash"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;
