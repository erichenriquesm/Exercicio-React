import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router";
import Button from "./Button";

function ListTasks({ tasks, toggleTask, deleteTask }) {
  const navigate = useNavigate();

  const seeDetails = (task) => {
    const query = new URLSearchParams();
    query.set('title', task.title);
    query.set('description', task.description);
    navigate(`/task?${query.toString()}`);
  };

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.length ? (
        tasks.map((task) => {
          return (
            <li key={task.id} className="flex gap-2">
              <button
                onClick={() => toggleTask(task.id)}
                className={`bg-slate-400 text-white text-left p-2 rounded-md w-full ${
                  task.isCompleted ? "line-through" : ""
                }`}
              >
                {task.title}
              </button>

              <Button
                onClick={() => seeDetails(task)}
                className="bg-slate-400 text-white p-2 rounded-md"
              >
                <ChevronRightIcon />
              </Button>

              <Button
                onClick={() => deleteTask(task.id)}
                className="bg-slate-400 text-white p-2 rounded-md"
              >
                <TrashIcon />
              </Button>
            </li>
          );
        })
      ) : (
        <li className="text-center text-slate-400">Sem tarefas registradas.</li>
      )}
    </ul>
  );
}

export default ListTasks;
