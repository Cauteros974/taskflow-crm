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
      </Box>
    </Box>
  );
}