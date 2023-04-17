import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>Administrador de tareas</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Agregar tarea"
      />
      <button onClick={addTask}>Agregar</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <p className="task-text">{task}</p>
            <button onClick={() => removeTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default App;
