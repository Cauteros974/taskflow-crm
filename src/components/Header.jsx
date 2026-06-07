import { Box, Typography } from "@mui/material";
import { Menu } from "@headlessui/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Header() {
  return (
    <Box className="header">
      <Box>
        <Typography variant="h5" fontWeight={800}>
          TaskFlow CRM
        </Typography>

        <Typography variant="body2" color="text.secondary">
            Managing tasks, clients, and projects
        </Typography>
      </Box>
      
      <Menu as="div" className="profile-menu">
        <Menu.Button>
            Test
            <KeyboardArrowDownIcon fontSize="small" />
        </Menu.Button>
      </Menu>
    </Box>
  );
}