import { Link } from "react-router-dom";

const Task = ({ task, confirmDelete, isDone, isCompleted }) => {
    return (
        <div className="col-md-6">
            <div className="card my-2 task-card shadow p-2" style={{backgroundColor : isCompleted ? "#D2F4EA" : "white"}}>
                <div className="card-body">
                    <div className="row align-items-center d-flex justify-content-around">
                        <div className="col-md-4 col-sm-4">
                            <img
                                className="img img-fluid rounded border-1 solid"
                                src={task.photo}
                                alt=""
                            />
                        </div>
                        <div className="col-md-7 col-sm-7">
                            <ul className="list-group">
                                {isCompleted ? (
                                    <li className="list-group-item rounded border-0 mt-2" style={{backgroundColor : ""}}>
                                        <del>{task.task}</del>
                                    </li>
                                ) : (
                                    <li className="list-group-item  rounded border-0 mt-2">
                                        {task.task}
                                    </li>
                                )}

                                <li className="list-group-item  m-1 rounded border-0" style={{fontSize : "14px"}}>
                                    <em>{task.description}</em>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                            <button
                                className="btn my-1 rounded-pill check-btn"
                                onClick={isDone}
                                style={{ backgroundColor: "#20C997" }}
                            >
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <Link
                                className="btn my-1 btn-primary rounded-pill"
                                to={`/tasks/edit/${task.id}`}
                            >
                                <span className="fa fa-pen"></span>
                            </Link>
                            <button
                                onClick={confirmDelete}
                                className="btn my-1 btn-danger rounded-pill"
                            >
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
