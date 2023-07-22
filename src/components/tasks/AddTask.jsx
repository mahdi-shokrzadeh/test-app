import { Link } from "react-router-dom";
import Spinner from "../Spinner";

const AddTask = ({ loading, task, setTaskInfo, groups , createTaskForm }) => {
    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <section className="p-3">
                        <img
                            src={require("../../assets/man-taking-note.png")}
                            alt=""
                            height="400px"
                            className="img"
                            style={{
                                position: "absolute",
                                zIndex: "-1",
                                top: "130px",
                                left: "100px",
                                opacity: "75%",
                            }}
                        />

                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p
                                        className="h4 fw-bold text-center "
                                        style={{ color: "green" }}
                                    >
                                        اضافه کردن تسک جدید
                                    </p>
                                </div>
                            </div>
                            <hr style={{ backgroundColor: "green" }} />

                            <div className="row mt-5 ">
                                <div className="col-md-4">
                                    <form onSubmit={createTaskForm} >
                                        <div className="mb-3">
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
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                name="photo"
                                                placeholder="آدرس تصویر"
                                                value={task.photo}
                                                onChange={setTaskInfo}
                                                required={true}
                                                className="form-control"
                                                style={{ borderRadius: "10px" }}
                                            />
                                        </div>
                                        <div className="mb-3">
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
                                                <option disabled={true}>نوع فعالیت</option>
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
                                                value="اضافه کردن تسک"
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
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default AddTask;
