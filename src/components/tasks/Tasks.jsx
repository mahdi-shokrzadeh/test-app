import { Fragment } from "react";

import Task from "./Task";
import Search from "./Search";
import NotForud from "../../assets/no-found.gif";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

const Tasks = ({ tasks, loading, confirmDelete, isDone , handleSearch}) => {
 



    return (
        <>
            <sction className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="grid">
                            <div className="row">
                                <div className="col">
                                    <p className="h3">
                                        <Link
                                            className="btn mx-2 btn-success"
                                            to="/tasks/add"
                                        >
                                            اضافه کردن تسک جدید
                                            <i className="fa fa-plus-circle mx-2" />
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        < Search handleSearch={handleSearch}  />

                    </div>
                </div>
            </sction>

            {loading ? (
                <Spinner />
            ) : (
                <section className="container">
                    <div className="row">
                        {tasks.length > 0 ? (
                            tasks.map((t) => (
                                <Task
                                    isDone={() => {
                                        isDone(t.id);
                                    }}
                                    isCompleted={t.isCompleted}
                                    key={t.id}
                                    task={t}
                                    confirmDelete={() => {
                                        confirmDelete(t.id);
                                    }}
                                />
                            ))
                        ) : (
                            <div className="text-center py-5">
                                <p className="h3 text-warning ">تسک یافت نشد</p>
                                <img
                                    src={NotForud}
                                    alt="یافت نشد"
                                    className="img w-25"
                                />
                            </div>
                        )}
                    </div>
                </section>
            )}
        </>
    );
};

export default Tasks;
