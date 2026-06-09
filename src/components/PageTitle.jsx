import { Box, Typography } from "@mui/material";

export default function PageTitle({title}) {
    return(
        <Box className="page-profile">
            <Box>
                <Typography variant="h4" fontWeight={900}>
                    {title}
                </Typography>

                {subtitle && (
                    <Typography>
                        
                    </Typography>
                )}
            </Box>
        </Box>
    )
}