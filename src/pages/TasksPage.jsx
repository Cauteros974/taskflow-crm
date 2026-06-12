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
        })
    })
}