import { useState, useEffect } from "react";
import {
    Route,
    Routes,
    NavLink,
    Navigate,
    useNavigate,
    useSearchParams,
    URLSearchParams,
    useParams,
} from "react-router-dom";

import { Toast, ToastContainer, toast } from "react-toastify";

import "./App.css";
import Navbar from "./components/Navbar";
import SearchHandler from "./components/tasks/SearchHandler";
import Tasks from "./components/tasks/Tasks";
import AddTask from "./components/tasks/AddTask";
import EditTask from "./components/tasks/EditTask";

// importing services
import {
    getAllTasks,
    getAllGroups,
    createTask,
    deleteTask,
    getTaskById,
    updateTask,
} from "./services/taskService";

import confirmAlert from "react-confirm-alert";
import NotFound from "./components/NotFound";
import Search from "./components/tasks/Search";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [gropus, setGroups] = useState([]);
    const [singleTask, setSingleTask] = useState({});

    const [searchParams , setSearchParams] = useSearchParams();



    const [getTask, setTask] = useState({
        isCompleted: false,
        task: "",
        photo: "",
        group: "",
        description: "",
    });
    const [forceRender, setForceRender] = useState(false);

    const setTaskInfo = (event) => {
        setTask({ ...getTask, [event.target.name]: event.target.value });
    };

    const navigate = useNavigate();
    const createTaskForm = async (event) => {
        // prevent refreshing page
        event.preventDefault();
        try {
            const { status } = await createTask(getTask);

            if (status === 201) {
                toast.success("تسک اضافه شد");
                setTask({});
                setForceRender(!forceRender);
                navigate("/");
                setTask({
                    isCompleted: false,
                    task: "",
                    photo: "",
                    group: "",
                    description: "",
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data: tasksData } = await getAllTasks();
                setTasks(tasksData);
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        };

        fetchData();
    }, [forceRender]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data: tasksData } = await getAllTasks();
                const { data: groups } = await getAllGroups();
                setTasks(tasksData);
                setGroups(groups);
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const isDone = async (taskId) => {
        try {
            setLoading(true);
            const { data: tasksData } = await getTaskById(taskId);

            // console.log(tasksData);
            // setSingleTask({
            //     ...singleTask,
            //     isCompleted: !singleTask.isCompleted,
            // });
            // console.log(singleTask);
            let task = tasksData;
            task.isCompleted = !task.isCompleted;
            console.log(task);
            const { data } = await updateTask(taskId, task);
            if (data) {
                setForceRender(!forceRender);
                setLoading(false);
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    const removeTask = async (taskId) => {
        try {
            setLoading(true);
            const response = await deleteTask(taskId);
            if (response) {
                const { data: tasksData } = await getAllTasks();
                setTasks(tasksData);
                setLoading(false);
                toast.error("تسک با موفقیت حذف شد");
            }
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    // const confirm = (taskId) => {
    //   confirmAlert({
    //     custumUI : ({onclose}) => {
    //       return (
    //         <div dir="rtl" className="p-4"  style={{border : "1px solid" , borderRadius : "1rem"}}>
    //           <h1>
    //             پاک کردن تسک
    //           </h1>
    //           <p>
    //             مطمئنی که میخوای تسک رو حذف کنی؟
    //           </p>
    //           <button
    //           className="btn mx-2 btn-danger"
    //           onClick={ () => {
    //             removeTask(taskId) ;
    //             onclose();
    //           }}>
    //             حذف
    //           </button>
    //           <button onClick={onclose} className="btn btn-success">
    //             انصراف
    //           </button>
    //         </div>
    //       )
    //     }
    //   })
    // }

    const handleSearch = async () => {


        console.log(searchParams.get("filter"));
        const { data } = await getAllTasks();


        if(searchParams.get === "") {
            setTasks(data) ;

        }else{
            // console.log(data)

            setTasks(data.filter((item) => item.task.startsWith(searchParams.get("filter"))));
            console.log(data.filter((item) => item.task.startsWith(searchParams.get("filter"))))
        }
            
                
            

            
    };

    return (
        <div className="App container">
            <ToastContainer rtl={true} position="top-right" theme="dark" />
            {/* <Navbar /> */}

            <Routes>
                <Route path="/" element={<Navigate to="/tasks" />} />
                <Route
                    path="/tasks"
                    element={
                        <Tasks
                            tasks={tasks}
                            loading={loading}
                            confirmDelete={removeTask}
                            isDone={isDone}
                            setTasks={setTasks}
                            handleSearch={handleSearch}
                        />
                    }
                />
                <Route
                    path="tasks/add"
                    element={
                        <AddTask
                            loading={loading}
                            setTaskInfo={setTaskInfo}
                            task={getTask}
                            groups={gropus}
                            createTaskForm={createTaskForm}
                        />
                    }
                />

                {/* <Route      
                path="tasks:filter"
                element={<SearchHandler tasks={tasks} setTasks={setTasks} hadleSearch={hadleSearch} />} 
                /> */}

                <Route
                    path="tasks/edit/:taskId"
                    element={
                        <EditTask
                            forceRender={forceRender}
                            setForceRender={setForceRender}
                        />
                    }
                />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default App;
