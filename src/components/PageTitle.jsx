import { Box } from "@mui/material";

export default function PageTitle() {
    return(
        <Box className="page-profile">
            <Box>
                <Typography variant="h4" fontWeight={900}>
                    {title}
                </Typography>
            </Box>
        </Box>
    )
}