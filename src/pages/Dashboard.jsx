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
        ? Math.round((completed / tasks.length) * 100)
        : 0
    
    const columns = [
        {
            title: "Task",
            dataIndex: "title"
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
            dataIndex: "dueDate"
        }
    ];

    return(
        <>
            <PageTitle
                title="Dashboard"
                subtitle="General statistics on tasks, clients, and projects"
            >
                <Grid>
                    <StatCard title="Total tasks" value={tasks.length} />
                    <StatCard title="In progress" value={inProgress} />
                    <StatCard title="Under review" value={review} />
                    <StatCard title="Critical" value={critical} />
                    <StatCard title="Clients" value={clients.length} />
                    <StatCard title="Projects" value={projects.length} />
                </Grid>

                <Grid container spacing={2} className="dashboard-grid">
                    <Grid item xs={12} md={5}>
                        <Card className="soft-card">
                            <CardContent>
                                <Typography variant="h6" fontWeight={800} gutterBottom>
                                    Task progress
                                </Typography>

                                <Typography color="text.secondary" gutterBottom>
                                    Completed {completed} of {tasks.length}
                                </Typography>

                                <LinearProgress variant="determinate" value={progressValue}/>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <Card className="soft-card">
                            <CardContent>
                                <Typography variant="h6" fontWeight={800} gutterBottom>
                                    Upcoming tasks
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </PageTitle>
        </>
    )
}