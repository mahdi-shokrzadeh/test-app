import { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import { getAllGroups, getTaskById , updateTask } from "../../services/taskService";

import Spinner from "../Spinner";

const EditTask = ({forceRender , setForceRender}) => {
    const { taskId } = useParams();
    const navigate = useNavigate();

    const [state, setState] = useState({
        loading: false,
        task: {
            id : taskId ,
            task: "",
            photo: "",
            group: "",
            description: "",
            isCompleted: "flase",
        },
        groups: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setState({ ...state, loading: true });
                const { data: taskData } = await getTaskById(taskId);
                const { data: groupsData } = await getAllGroups();
                setState({
                    ...state,
                    loading: false,
                    task: taskData,
                    groups: groupsData,
                });
            } catch (err) {
                console.log(err);
                setState({ ...state, loading: false });
            }
        };

        fetchData();
    }, []);

    const setTaskInfo = (event) => {
        setState({
            ...state,
            task: {
                ...state.task,
                [event.target.name]: event.target.value,
            },
        });
    };

    const submitForm = async (event) => {
        event.preventDefault();
        try {
            setState({ ...state, loading: true });
            console.log(state.task)
            const { data } = await updateTask( taskId,state.task);
            setState({ ...state, loading: false });
            if (data) {
                setForceRender(!forceRender);
                navigate("/");
            }
        } catch (err) {
            console.log(err);
            setState({ ...state, loading: false });
        }
    };

    const { loading, task, groups } = state;

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <section className="p-3">
                        <div className="container">
                            <div className="row my-2">
                                <div className="col text-center">
                                    <p
                                        className="h4 fw-bold"
                                        style={{ color: "orange" }}
                                    >
                                        ویرایش تسک
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div
                                className="row p-2 w-75 mx-auto align-items-center"
                                style={{
                                    backgroundColor: "#44475a",
                                    borderRadius: "1em",
                                }}
                            >
                                <div className="col-md-8">
                                    <form onSubmit={submitForm} className="mt-4">
                                        <div className="mb-2">
                                            <input
                                                type="text"
                                                name="task"
                                                placeholder="میخوای چیکار کنی؟"
                                                required={true}
                                                value={task.task}
                                                onChange={setTaskInfo}
                                                className="form-control "
                                                style={{ borderRadius: "10px" }}
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <input
                                                name="photo"
                                                type="text"
                                                value={task.photo}
                                                onChange={setTaskInfo}
                                                className="form-control"
                                                required={true}
                                                placeholder="آدرس تصویر"
                                            />
                                        </div>
            
                                        <div className="mb-2">
                                            <textarea
                                                type="text"
                                                name="description"
                                                placeholder="توضیحات"
                                                value={task.description}
                                                onChange={setTaskInfo}
                                                required={true}
                                                className="form-control"
                                                style={{ borderRadius: "10px" }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <select
                                                name="group"
                                                value={task.group}
                                                onChange={setTaskInfo}
                                                required={true}
                                                className="form-control"
                                                style={{ borderRadius: "10px" }}
                                            >
                                                <option disabled={true}>
                                                    نوع فعالیت
                                                </option>
                                                {groups.map((g) => (
                                                    <option
                                                        key={g.id}
                                                        value={g.id}
                                                    >
                                                        {g.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mx-2 mt-4">
                                            <input
                                                type="submit"
                                                className="btn btn-success rounded"
                                                value="ویرایش تسک"
                                            />
                                            <Link
                                                className="btn btn-danger mx-2 ronded"
                                                to="/"
                                            >
                                                انصراف
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4">
                                    <img
                                        src={task.photo}
                                        className="img-fluid rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default EditTask;
