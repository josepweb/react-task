import { createContext, useState, useEffect } from "react"
import { tasks } from "../data/Task"

export const TaskContext = createContext()

export function TaskContextProvider(props) {

    const [task, setTask] = useState([])

    function createTask(taskss) {
        setTask([...task, {
            title: taskss.title,
            id: task.length,
            descripcion: taskss.descripcion
        }])
    }

    function deleteTask(taskId) {
        setTask(task.filter(task => task.id !== taskId))
    }

    useEffect(() => {
        setTask(tasks)
    }, [])

    return (
        <TaskContext.Provider value={{
            task,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}