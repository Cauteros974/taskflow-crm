import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { Popconfirm, Table } from "antd";

import PageTitle from "../components/PageTitle.jsx";
import TaskModal from "../components/TaskModal.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import HeadlessSelect from "../components/HeadlessSelect.jsx";
import { 
    addTask, 
    updateTask,
    deleteTask,
    setTaskFilter,
    resetTaskFilters
} from "../features/tasks/tasksSlice.js";

import { priorities, statuses } from "../data/mockData.js";

export default function TaskPage() {
    const dispatch = useDispatch();

    const tasks = useSelector((state) => state.tasks.items);
    const filters = useSelector((state) => state.tasks.filters);
    const clients = useSelector((state) => state.clients.items);
    const projects = useSelector((state) => state.projects.items);

    const [modalOpen, setModalOpen] = useState(false);
    const [editingTask, setEditingTask] = useState(null);

    const filteredTasks = useMemo(() => {
        return task.filter((task) => {
            const matchesSearch = task.title
                .toLowerCase()
                .includes(filters.search.toLowerCase());

                const matchesStatus = 
                    filters.status === "All" || task.status === filters.status;
                
                const matchesPriority =
                    filters.priority === "All" || task.priority === filters.priority;

                return matchesSearch && matchesStatus && matchesPriority;
        });
    }, [tasks, filters]); 
 
    const openCreateModel = () => {
        setEditingTask(null);
        setModalOpen(true);
    };

    const openEditModal = (task) => {
        setEditingTask(task);
        setModalOpen(true);
    };

    const handleSubmit = (task) => {
        if (editingTask) {
            dispatch (
                updateTask({
                    ...task,
                    id: editingTask.id
                })
            );
        } else{
            dispatch(addTask(task));
        }
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "title"
        },
        {
            title: "Client",
            dataIndex: "clientId",
            render: (clientId) => 
                clients.find((client) => client.id === clientId)?.name || "_"
        },
        {
            title: "Project",
            dataIndex: "projectId",
            render: (projectId) => 
                projects.find((project) => project.id === projectId)?.name || "_"
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (value) => <StatusBadge value={value} />
        },
        {
            title: "Priority",
            dataIndex: "priority",
            render: (value) => <StatusBadge value={value} />
        },
        {
            title: "Deadline",
            dataIndex: "dueDate",
            sorter: (a, b) => a.dueDate.localeCompare(b.dueDate)
        },
        {
            title: "Actions",
            render: (_, record) => (
                <div className="table-actions">
                    <Button size= "small" onClick={() => openEditModal(record)}>
                        Change
                    </Button>

                    <Popconfirm
                        title = "Delete task?"
                        okText = "Yes"
                        cancelText = "No"
                        onConfirm={() => dispatch(deleteTask(record.id))}
                    >
                        <Button>
                            Delete
                        </Button>
                    </Popconfirm>
                </div>
            )
        }
    ]
}