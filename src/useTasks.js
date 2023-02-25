import { useState, useEffect } from "react";

export const useTasks = () => {

    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
        setHideDone((hideDone) => !hideDone);
    };

    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks((tasks) =>
            tasks.map((task) =>
                task.id === id ? { ...task, done: !task.done }
                    : task
            ));
    };

    const setAllDone = () => {
        setTasks((tasks) =>
            tasks.map((task) => ({
                ...task,
                done: true,
            }))
        );
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            },
        ]);
    };

    return {
        tasks,
        hideDone,
        toggleHideDone,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask
    };
};

