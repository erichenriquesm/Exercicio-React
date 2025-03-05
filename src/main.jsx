import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import TaskPage from "./pages/TaskPage.jsx";
import HomePage from "./pages/HomePage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/task" element={<TaskPage />} />
    </Routes>
  </BrowserRouter>
);
