import { NavLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from "@mui/icons-material/Task";
import GroupsIcon from "@mui/icons-material/Groups";
import FolderIcon from "@mui/icons-material/Folder";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";

const navItems = [
  {
    to: "/",
    label: "Dashboard",
    icon: <DashboardIcon />
  },
  {
    to: "/tasks",
    label: "Tasks",
    icon: <TaskIcon />
  },
  {
    to: "/clients",
    label: "Clients",
    icon: <GroupsIcon />
  },
  {
    to: "/projects",
    label: "Projects",
    icon: <FolderIcon />
  },
  {
    to: "/kanban",
    label: "Kanban",
    icon: <ViewKanbanIcon />
  }
];

export default function Sidebar() {
    return(
        <Box clasname = "sidebar">
            <Typography variant="h6" fontWeight={900} className="logo">
                TaskFlow
            </Typography>

            <nav className="nav">
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to === "/"}
                        className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }
                    >

                    </NavLink>
                ))}
            </nav>
        </Box>
    )
}