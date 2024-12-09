import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
    // État pour stocker les tâches
    const [tasks, setTasks] = useState([]);

    // Fonction pour ajouter une tâche
    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]); // Ajoute la nouvelle tâche
    };

    // Fonction pour supprimer une tâche
    const deleteTask = (taskToDelete) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => task !== taskToDelete)
        );
    };

    return (
        <div className="App">
            <header className="App-header">
                <Form addTask={addTask} />
                <List tasks={tasks} deleteTask={deleteTask} />
            </header>
        </div>
    );
}

export default App;
