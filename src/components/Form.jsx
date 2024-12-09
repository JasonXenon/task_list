import React, { useState } from 'react';

const Form = ({ addTask }) => {
    const [task, setTask] = useState(""); // Un seul champ de tâche

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task) {
            addTask(task);  // Appelle la fonction passée par le parent pour ajouter la tâche
            setTask("");  // Réinitialise le champ de saisie
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-gray-800 p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-gray-200">Formulaire</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="task" className="block text-sm font-medium text-gray-300 mb-2">Nom de la tâche :</label>
                    <input
                        type="text"
                        id="task"
                        name="task"
                        value={task}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        onChange={(e) => setTask(e.target.value)} // Mise à jour du state de la tâche
                    />
                </div>

                <button type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                    Ajouter
                </button>
            </form>
        </div>
    );
}

export default Form;
