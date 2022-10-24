import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';


const CartWidget = () => {
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir Carrito">
                <IconButton sx={{ p: 0 }}>
                    <ShoppingCartIcon style={{ color: '#fff' }}></ShoppingCartIcon>
                </IconButton>
            </Tooltip>
        </Box>
    )
}

export default CartWidget