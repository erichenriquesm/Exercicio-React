import { useEffect, useState } from "react";
import ListTasks from "../components/ListTasks";
import AddTask from "../components/AddTask";
import { v4 } from "uuid";
import Title from "../components/Title";

function HomePage() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Basicamente um watch
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Passar um array vazio no segundo parâmetro faz com que a closure seja executada apenas uma única vez. Basicamente um mounted.
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("tasks"))?.length) {
      return;
    }
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((data) => data.json())
      .then((parsedData) => {
        const parsedTasks = parsedData.map((task) => {
          return {
            id: task.id,
            title: task.title,
            description: "",
            isCompleted: task.completed,
          };
        });

        setTasks(parsedTasks);
      });
  }, []);

  const toggleTask = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskId) {
        return task;
      }

      return { ...task, isCompleted: !task.isCompleted };
    });

    setTasks(newTasks);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const addTask = (title, description) => {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>
          Gerenciador de tarefas
        </Title>

        <AddTask addTask={addTask} />
        <ListTasks
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default HomePage;
