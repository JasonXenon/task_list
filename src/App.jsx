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

    return (
        <div className="App">
            <header className="App-header">
                <Form addTask={addTask} />
                <List tasks={tasks} />
            </header>
        </div>
    );
}

export default App;
