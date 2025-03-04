import { useState } from "react";
import ListTasks from "./components/ListTasks";
import AddTask from "./components/AddTask";
import "./App.css"
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Essa é uma descrição de uma tarefa.",
      isCompleted: false
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Essa é uma descrição de uma tarefa sobre estudar inglês.",
      isCompleted: true
    },
    {
      id: 3,
      title: "Estudar espanhol",
      description: "Essa é uma descrição de uma tarefa sobre estudar espanhol.",
      isCompleted: true
    },
  ]);

  const toggleTask = (taskId) => {    
    const newTasks = tasks.map((task) => {
      if(task.id !== taskId){
        return task;
      }

      return { ...task, isCompleted: !task.isCompleted };
    });

    setTasks(newTasks);
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  const addTask = (title, description) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false
    }

    setTasks([...tasks, newTask]);
  } 

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>

        <AddTask
          addTask={ addTask }
        />
        <ListTasks 
          tasks={ tasks } 
          toggleTask={ toggleTask } 
          deleteTask={ deleteTask }
        />
      </div>
    </div>
  );
}

export default App;
