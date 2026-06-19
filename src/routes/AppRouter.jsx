import { Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import TasksPage from "../pages/TasksPage.jsx";
import ClientsPage from "../pages/ClientsPage.jsx";
import ProjectsPage from "../pages/ProjectsPage.jsx";
import KanbanPage from "../pages/KanbanPage.jsx";


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="tasks" element={<TasksPage />} />

        <Route path="clients" element={<ClientsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="kanban" element={<KanbanPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}