import { Fragment } from "react";

import Task from "./Task";
import NotForud from "../../assets/no-found.gif";
import Spinner from "../Spinner";

const Tasks = ({ tasks, loading }) => {
    return (
        <>
            <sction className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">
                                <button className="btn mx-2 btn-success">
                                    اضافه کردن تسک جدید
                                    <i className="fa fa-plus-circle mx-2" />
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </sction>
            {loading ? (
                <Spinner />
            ) : (
                <section className="container">
                    <div className="row">
                        {tasks.length > 0 ? (
                            tasks.map((t) => <Task key={t.id} task={t} />)
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
