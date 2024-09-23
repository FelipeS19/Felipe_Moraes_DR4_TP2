import { useState } from 'react';
const Exercise05 = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
  
    const addTask = () => {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    };
  
    const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i !== index));
    };
  
    return (
      <div>
        <h1>Exercise 05 </h1>
        <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Nova tarefa" />
        <button onClick={addTask}>Adicionar</button>
        {tasks.map((t, index) => (
          <div key={index}>
            <span style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>{t.text}</span>
            <button onClick={() => deleteTask(index)}>Excluir</button>
          </div>
        ))}
      </div>
    );
  };
export default Exercise05;