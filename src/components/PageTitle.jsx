import { Box, Typography } from "@mui/material";

export default function PageTitle({title, subtitle}) {
    return(
        <Box className="page-profile">
            <Box>
                <Typography variant="h4" fontWeight={900}>
                    {title}
                </Typography>

                {subtitle && (
                    <Typography variant="body1" color="text.secondary">
                        {subtitle}
                    </Typography>
                )}
            </Box>

            {action}
        </Box>
    );
}