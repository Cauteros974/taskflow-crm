import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
    return(
        <Box className="app-shell">
            <Sidebar />

            <Box className="app-content">
                <Header />

                <main className="page-container">
                    <Outlet />
                </main>
            </Box>
        </Box>
    );
}