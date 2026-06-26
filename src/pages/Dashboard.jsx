import { useSelector } from "react-redux";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
  Button
} from "@mui/material";
import { Table } from "antd";

import { store } from "../app/store.js";

import { mockTeam } from "../data/mockData.js";

import PageTitle from "../components/PageTitle.jsx";
import StatusBadge from "../components/StatusBadge.jsx";

export default function Dashboard() {
  const tasks = useSelector((state) => state.tasks.items);
  const clients = useSelector((state) => state.clients.items);
  const projects = useSelector((state) => state.projects.items);

  const exportData = () => {

    const appState = store.getState();

    const blob = new Blob(
      [JSON.stringify(appState, null, 2)],
      { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `taskflow-${new Date()
      .toISOString()
      .slice(0, 10)}.json`;

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  };

  const importData = async (event) => {
    const file = event.target.files?.[0];
    
    if (!file) return;

    try{
      const data = JSON.parse(await file.text())

      const valid = 
        Array.isArray(data.tasks?.items) &&
        Array.isArray(data.clients?.items) &&
        Array.isArray(data.projects?.items) &&
        Array.isArray(data.team?.items);

      if(!valid) {
        throw new Error();
      }

      localStorage.setItem(
        "taskflow-crm-state",
        JSON.stringify(data)
      );

      window.location.reload();

    } catch{
      alert("Invalid TaskFlow backup");
    }
  };


  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  
  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;
  
  const review = tasks.filter(
    (task) => task.status === "Under review"
  ).length;
  const critical = tasks.filter(
    (task) => task.priority === "Critical"
  ).length;

  const progressValue = tasks.length
    ? Math.round((completed / tasks.length) * 100)
    : 0;

  const upcomingTasks = [...tasks]
    .filter((task) => task.dueDate)
    .sort(
      (firstTask, secondTask) =>
        new Date(firstTask.dueDate) - new Date(secondTask.dueDate)
    )
    .slice(0, 5);

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

  const teamWorkload = mockTeam.map((member) => {
    const memberTasks = tasks.filter(
      (task) =>
        task.assigneeId === member.id &&
        task.status !== "Completed"
    );

    const workload = Math.min(
      Math.round((memberTasks.length / member.capacity) * 100),
      100
    );

    return{
      ...member,
      taskCount: memberTasks.length,
      workload
    }
  })

  return (
    <>
      <PageTitle
        title="Dashboard"
        subtitle="General statistics on tasks, clients, and projects"
      />

      <Grid container spacing={2} className="stats-grid">
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

              <Typography variant="h4" fontWeight={900} sx={{ my: 2 }}>
                {progressValue}%
              </Typography>

              <LinearProgress
                variant="determinate"
                value={progressValue}
                sx={{ height: 10, borderRadius: 5 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={7}>
          <Card className="soft-card">
            <CardContent>
              <Typography variant="h6" fontWeight={800} gutterBottom>
                Upcoming tasks
              </Typography>

              <Table
                rowKey="id"
                columns={columns}
                dataSource={upcomingTasks}
                pagination={false}
                size="small"
                locale={{ emptyText: "No tasks yet" }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2} className="dashboard-secondary-grid">
        <Grid item xs={12} md={7}>
          <Card className="soft-card">
            <CardContent>
              <Typography variant="h6" fontWeight={800}>
                Project progress
              </Typography>
              
              <Typography color="text.secondary" className="section-subtitle">
                Current completion status of active projects
              </Typography>

              <div className="project-list">
                {projects.length ? (
                  projects.map((project) => (
                    <div className="project-progress-item" key={project.id}>
                      <div className="project-progress-header">
                        <div>
                          <Typography fontWeight={800}>
                            {project.title}
                          </Typography>

                          <Typography variant="body2" color="text.secondary">
                            Deadline: {project.deadline || "Not specified"}
                          </Typography>
                        </div>

                        <Typography>
                          {project.progress || 0}%
                        </Typography>
                      </div>

                      <LinearProgress 
                        variant="determinate"
                        value={project.progress || 0}
                        sx={{
                          height: 8,
                          borderRadius: 4
                        }}
                      />
                    </div>
                  ))
                ) : (
                  <Typography color="text.secondary">
                    No projects yet
                  </Typography>
                )}
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

function StatCard({ title, value }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={2}>
      <Card className="stat-card">
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>

          <Typography variant="h4" fontWeight={900}>
            {value}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}