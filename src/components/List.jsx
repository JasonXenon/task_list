import React, { useState } from "react";

function TaskList({ tasks, deleteTask, updateTask }) {
    const [checkedStates, setCheckedStates] = useState(tasks.map(() => false));

    const handleCheckboxChange = (index) => (event) => {
        const updatedStates = [...checkedStates];
        updatedStates[index] = event.target.checked;
        setCheckedStates(updatedStates);
    };

    return (
        <div className="max-w-lg mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-md">
            <h1 className="text-gray-100 mb-4">Liste des tâches</h1>
            {tasks.length > 0 ? (
                <ul>
                    {tasks.map((task, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-2">
                            <input
                                type="checkbox"
                                onChange={handleCheckboxChange(index)}
                                checked={checkedStates[index]}
                                className="accent-blue-500"
                            />
                            <li
                                className={`text-white ${
                                    checkedStates[index] ? "line-through text-green-300" : ""
                                }`}
                            >
                                {task}
                            </li>
                            <button
                                onClick={() => deleteTask(task)}
                                className="text-red-500 hover:text-red-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26">
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path fill="red"
                                          d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>
                                </svg>
                            </button>
                            <button
                                onClick={() => updateTask(task)}
                                className="text-green-500 hover:text-green-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="26" height="26"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round">
                                    <path d="M32 4a28 28 0 1 1-19.8 8.2"/>
                                    <path d="M32 4v12h12"/>
                                    <path d="M24 32l6 6 12-12"/>
                                </svg>
                            </button>
                        </div>
                    ))}
                </ul>
            ) : (
                <p className="text-slate-400">Aucune tâche n'a été créée</p>
            )}
        </div>
    );
}

export default TaskList;