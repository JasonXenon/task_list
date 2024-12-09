import React, { useState } from "react";

function TaskList({ tasks }) {
    const [checkedStates, setCheckedStates] = useState(tasks.map(() => false)); // Initialiser un tableau d'états

    const handleCheckboxChange = (index) => (event) => {
        const updatedStates = [...checkedStates];
        updatedStates[index] = event.target.checked; // Met à jour l'état de la checkbox spécifique
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
                                className={`text-white ${checkedStates[index] ? "line-through text-green-300" : ""}`}
                            >
                                {task}
                            </li>
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
