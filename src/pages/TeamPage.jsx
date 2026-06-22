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
    </>
  );
}