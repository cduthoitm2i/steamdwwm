import React, {useState} from "react";
import {Adb, MenuOpen} from "@material-ui/icons";
import {Box, IconButton, ListItem, Menu, MenuItem, Typography} from "@material-ui/core";

export default function MenuTop() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }
    return (
        <>
            <Adb sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                SteamDwwm
            </Typography>
            <Box sx={{flexGrow:1, display:{xs:'flex', flex:'none'}}}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuOpen />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical:'bottom',
                        horizontal: 'left'
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}>

                    <MenuItem>
                        <ListItem>Mon super menu</ListItem>
                    </MenuItem>


                </Menu>

            </Box>
        </>
    )
}