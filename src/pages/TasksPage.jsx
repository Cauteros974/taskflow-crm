import { useMemo } from "react";
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

export default function TaskPage() {
    const dispatch = useDispatch();
}