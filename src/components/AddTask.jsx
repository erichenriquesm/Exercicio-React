import { useState } from "react";

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [validated, setValidated] = useState(true);


  const submit = () => {
    if(!title.trim() || !description.trim()){
        setValidated(false);
        return;
    }

    addTask(title, description)
    setTitle("");
    setDescription("");
    setValidated(true);
  }

  return (
    <div className="space-y-4 p-6 mb-2 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounder-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounder-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}  
      />
      <button
        onClick={submit}
        className="bg-slate-500 text-white px-4 py-2 rounded-2 font-medium"
      >
        Adicionar
      </button>
      <p className="text-red-500">
        {!validated ? 'Preencha os campos corretamente' : ''}
      </p>
    </div>
  );
}

export default AddTask;
