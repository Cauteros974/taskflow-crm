import { useSelector } from "react-redux";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography
} from "@mui/material";

import PageTitle from "../components/PageTitle.jsx";

export default function TeamPage() {
  const team = useSelector((state) => state.team.items);
  const tasks = useSelector((state) => state.tasks.items);

  return (
    <>
      <PageTitle
        title="Team"
        subtitle="Team members and current workload"
      />

      <Grid container spacing={2}>
        {team.map((member) => {
          const activeTasks = tasks.filter(
            (task) =>
              task.assigneeId === member.id &&
              task.status !== "Completed"
          ).length;

          const workload = Math.min(
            Math.round((activeTasks / member.capacity) * 100),
            100
          );

          return (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card className="soft-card">
                <CardContent>
                  <div className="team-member-header">
                    <Avatar>{member.name[0]}</Avatar>

                    <div>
                      <Typography fontWeight={900}>
                        {member.name}
                      </Typography>

                      <Typography color="text.secondary">
                        {member.role}
                      </Typography>
                    </div>
                  </div>

                  <Typography sx={{ mt: 2 }}>
                    {member.email}
                  </Typography>

                  <Typography color="text.secondary">
                    {activeTasks}/{member.capacity} active tasks
                  </Typography>

                  <LinearProgress
                    variant="determinate"
                    value={workload}
                    color={workload >= 80 ? "error" : "primary"}
                    sx={{ mt: 1, height: 8, borderRadius: 4 }}
                  />
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}