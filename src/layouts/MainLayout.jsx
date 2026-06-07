import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
    return(
        <Box classname="app-shell">
            <Sidebar />
        </Box>
    )
}