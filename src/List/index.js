import React from "react";
import "./style.css";

const List = ({ tasks, hideTasksDone }) => (
    <ul className="list">
        {tasks.map(task => (
            <li 
                key={task.id}
                className={`list__item>${task.done && hideTasksDone ? " list__item--hidden" : ""}`}>
                <button className="list__button list__button--done">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`list__itemContent${task.done ? " list__itemContent--done" : ""}`}>
                    {task.content}
                </span>
                <button className="
                list__button--remove">🗑</button>
            </li>
        ))}
    </ul>
);

export default List;