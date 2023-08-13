import React from 'react'

import { Box } from "@mui/material"

function Layout({ children }: any) {
    return (
        <Box sx={{
            padding: { xs: 1, sm: 2, md: 4, lg: 5, xl: 7 }
        }}>
            {children}
        </Box>
    )
}

export default Layout