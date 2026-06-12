import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography
} from "@mui/material";
import { Table } from "antd";

import PageTitle from "../components/PageTitle.jsx";
import StatusBadge from "../components/StatusBadge.jsx";

export default function Dashboard() {
    const tasks = useSelector((state) => state.tasks.items);
    const clients = useSelector((state) => state.clients.items);
    const projects = useSelector((state) => state.projects.items);

    const completed = tasks.filter(
        (task) => task.status === "Completed"
    ).length;

    const inProgress = tasks.filter(
        (task) => task.status == "In process"
    ).length;

    const review = tasks.filter(
        (task) => task.status === "Review"
    ).length;

    const critical = tasks.filter(
        (task) => task.priority === "Critical"
    ).length;

    const progressValue = tasks.length
        ? Math.round((completed / tasks.length))
        : 0
}