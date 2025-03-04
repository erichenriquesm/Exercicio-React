import { ChevronRightIcon, TrashIcon } from "lucide-react";

function ListTasks({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => {
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

            <button className="bg-slate-400 text-white p-2 rounded-md">
              <ChevronRightIcon />
            </button>

            <button
              onClick={() => deleteTask(task.id)}
              className="bg-slate-400 text-white p-2 rounded-md"
            >
              <TrashIcon />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ListTasks;
