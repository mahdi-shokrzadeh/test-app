import { useState ,useEffect } from "react";
import { Route, Routes , NavLink, Navigate } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Navbar from "./components/Navbar";
import Tasks from "./components/tasks/Tasks";
import AddTask from "./components/tasks/AddTask";
import ViewTask from "./components/tasks/ViewTask";
import EditTask from "./components/tasks/EditTask";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [getGropus , setGroups] = useState([]);

    useEffect( () => {
      const fetchData = async () => {
        try {
          setLoading(true) ;
          const {data : tasksData} = await axios.get("http://localhost:9000/tasks");
          const {data : groups} = await axios.get("http://localhost:9000/groups") ;
          setTasks(tasksData) ;
          setGroups(groups) ;
          setLoading(false);



        }catch(err) {
          setLoading(false);
          
        }
      }

      fetchData();
    } , [])

    return (
        <div className="App container">
            <Navbar />

            <Routes>
                <Route path="/" element={<Navigate to="/tasks" />} />
                <Route
                    path="/tasks"
                    element={<Tasks tasks={tasks} loading={loading} />}
                />
                <Route path="tasks/add" element={<AddTask />} />
                <Route path="tasks/:taskId" element={<ViewTask />} />
                <Route path="tasks/edit/:taskId" element={<EditTask />} />
            </Routes>
        </div>
    );
};

export default App;
