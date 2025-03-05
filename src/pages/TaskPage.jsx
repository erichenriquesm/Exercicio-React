import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";
import Title from "../components/Title";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button onClick={() => navigate(-1)} className="absolute top-0 left-0 bottom-0">
            <ChevronLeft className="text-slate-100" />
          </button>
          <Title>
            Detalhes da tarefa
          </Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>

          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
