import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  Grid,
} from "@mui/material";

import { Tab } from "@headlessui/react";
import dayjs from "dayjs";
import AddIcon from "@mui/icons-material/Add";

import PageTitle from "../components/PageTitle";
import StatusBadge from "../components/StatusBadge";

import { addProject, deleteProject, updateProject } from "../features/projects/projectsSlice";

export default function ProjectsPage() {
    const dispatch = useDispatch();

    const projects = useSelector(() => state.project.items);
    const clients = useSelector(() => state.clients.items);
    const tasks = useSelector((state) => state.tasks.items);
    
    const [search, setSearch] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);

    const [form] = Form.useForm();

    const filteredProjects = projects.filter((project) => 
        project.title.toLowerCase().includes()
    );
}
