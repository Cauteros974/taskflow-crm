import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  TextField,
  Typography
} from "@mui/material";
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Select
} from "antd";
import { Tab } from "@headlessui/react";
import dayjs from "dayjs";
import AddIcon from "@mui/icons-material/Add";

import PageTitle from "../components/PageTitle.jsx";
import StatusBadge from "../components/StatusBadge.jsx";

import {
  addProject,
  deleteProject,
  updateProject
} from "../features/projects/projectsSlice.js";

import { projectStatuses } from "../data/mockData.js";

export default function ProjectsPage() {
  const dispatch = useDispatch();

  const projects = useSelector((state) => state.projects.items);
  const clients = useSelector((state) => state.clients.items);
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
      startDate: project.startDate ? dayjs(project.startDate) : null,
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

    if (editingProject) {
      dispatch(
        updateProject({
          ...payload,
          id: editingProject.id
        })
      );
    } else {
      dispatch(addProject(payload));
    }

    setModalOpen(false);
  };

  return (
    <>
      <PageTitle
        title="Projects"
        subtitle="Creating projects, linking to clients, and monitoring progress"
        action={
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={openCreateModal}
          >
            Add a project
          </Button>
        }
      />

      <div className="filters-panel">
        <TextField
          label="Project Search"
          size="small"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <Grid container spacing={2}>
        {filteredProjects.map((project) => {
          const client = clients.find((item) => item.id === project.clientId);

          const projectTasks = tasks.filter(
            (task) => task.projectId === project.id
          );

          const completedProjectTasks = projectTasks.filter(
            (task) => task.status === "Completed"
          ).length;

          const projectProgress = projectTasks.length
            ? Math.round(
              (completedProjectTasks / projectTasks.length) * 100
            )
          : 0;

          return (
            <Grid item xs={12} md={6} key={project.id}>
              <Card className="soft-card project-card">
                <CardContent>
                  <div className="client-header">
                    <div>
                      <Typography variant="h6" fontWeight={900}>
                        {project.title}
                      </Typography>

                      <Typography color="text.secondary">
                        Client: {client?.name || "—"}
                      </Typography>
                    </div>

                    <StatusBadge value={project.status} />
                  </div>

                  <Tab.Group>
                    <Tab.List className="tabs-list">
                      <Tab
                        className={({ selected }) =>
                          selected ? "tab active" : "tab"
                        }
                      >
                        Description
                      </Tab>

                      <Tab
                        className={({ selected }) =>
                          selected ? "tab active" : "tab"
                        }
                      >
                        Tasks
                      </Tab>
                    </Tab.List>

                    <Tab.Panels>
                      <Tab.Panel>
                        <Typography className="project-description">
                          {project.description}
                        </Typography>

                        <Typography className="card-line">
                          Term: {project.startDate} — {project.deadline}
                        </Typography>

                        <Typography className="card-line">
                          Progress: {projectProgress}%
                        </Typography>

                        <LinearProgress
                          variant="determinate"
                          value={project.progress}
                        />
                      </Tab.Panel>

                      <Tab.Panel>
                        {projectTasks.length ? (
                          <ul className="task-list">
                            {projectTasks.map((task) => (
                              <li key={task.id}>
                                {task.title}
                                <StatusBadge value={task.status} />
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <Typography color="text.secondary">
                            There are no tasks yet
                          </Typography>
                        )}
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>

                  <div className="card-actions">
                    <Button size="small" onClick={() => openEditModal(project)}>
                      Change
                    </Button>

                    <Popconfirm
                      title="Delete project?"
                      okText="Yes"
                      cancelText="No"
                      onConfirm={() => dispatch(deleteProject(project.id))}
                    >
                      <Button size="small" color="error">
                        Delete
                      </Button>
                    </Popconfirm>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Modal
        title={editingProject ? "Edit a project" : "New project"}
        open={modalOpen}
        onOk={handleSubmit}
        onCancel={() => setModalOpen(false)}
        okText="Save"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Name"
            rules={[
              {
                required: true,
                message: "Enter the name"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="clientId"
            label="Client"
            rules={[
              {
                required: true,
                message: "Select a client"
              }
            ]}
          >
            <Select
              options={clients.map((client) => ({
                value: client.id,
                label: client.name
              }))}
            />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea rows={3} />
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            initialValue="Planning"
          >
            <Select
              options={projectStatuses.map((status) => ({
                value: status,
                label: status
              }))}
            />
          </Form.Item>

          <Form.Item name="progress" label="Progress" initialValue={0}>
            <InputNumber min={0} max={100} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item name="startDate" label="Start date">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item name="deadline" label="Deadline">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}