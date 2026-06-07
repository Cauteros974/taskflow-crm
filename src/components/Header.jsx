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
        <Menu.Button className="profile-button">
            Test
            <KeyboardArrowDownIcon fontSize="small" />
        </Menu.Button>

         <Menu.Items className="profile-menu-items">
            <Menu.Item>
                {({focus})=> {
                    <button className={focus ? "menu-item active" : "menu-item"}>
                        Profile
                    </button>
                }}
            </Menu.Item>
         </Menu.Items>
      </Menu>
    </Box>
  );
}