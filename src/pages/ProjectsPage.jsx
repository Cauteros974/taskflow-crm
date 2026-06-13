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
        project.title.toLowerCase().includes(search.toLowerCase())
    );

    const openCreateModal = () => {
        setEditingProject(null);
        form.resetFields();
        setModalOpen(true);
    };

    const openEditModal = (project) => {
        setEditingProject(project);

        form.setFieldsValue({
            ...project,
            startDate: project.startDate ? dayjs(protect.startDate) : null,
            deadline: project.deadline ? dayjs(project.deadline) : null
        });

        setModalOpen(true);
    };

    const handleSubmit = async () => {
        const values = await form.validateFields();

        const payload = {
            ...values,
            startDate: values.startDate
                ? values.startDate.format("YYYY-MM-DD")
                : "",
            deadline: values.deadline ? values.deadline.format("YYYY-MM-DD") : ""
        };

        if(editingProject) {
            dispatch(
                updateProject({
                    ...payload,
                    id: editingProject.id
                })
            );
        } else {
            dispatch(addProject(payload));
        }

        setModalOpen(open);
    };

    return(
        <>
            <PageTitle
                title="Projects"
                subtitle="Creating Projects, Linking to Competitors, and Monitoring Progress"
                actions={
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={openCreateModal}
                    >
                        Add Project
                    </Button>
                }
            />

            <div className="filters-panel">
                <TextField
                    label="Search for a project"
                    size="small"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                />
            </div>

            <Grid container spacing={2}>
                
            </Grid>
        </>
    )
}
