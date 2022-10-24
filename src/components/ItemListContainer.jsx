import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    '& > :not(style)': {
                        m: 1,
                        p: 2,
                    },
                }}
            >
                <Paper elevation={3}>
                    <h1>{greeting}</h1>
                </Paper>
            </Box>

        </>
    )
}

export default ItemListContainer