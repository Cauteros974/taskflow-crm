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
}