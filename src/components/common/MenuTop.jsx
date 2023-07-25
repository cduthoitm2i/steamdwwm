import React, {useState} from "react";
import {Adb, MenuOpen} from "@material-ui/icons";
import {Box, IconButton, ListItem, Menu, MenuItem, Typography} from "@material-ui/core";
import {Button} from "@mui/material";
import {Link, Route, Routes } from "react-router-dom";
// Import de toutes les pages pour le menu (pour les routes)
import Home from "../pages/Home";
import Rightprice from "../pages/Rightprice";
import Calculator from "../pages/Calculator";
import Morpion from "../pages/Morpion";
import Mygame from "../pages/Mygame";
import Documentation from "../pages/Documentation";
import CoockieClicker from "../pages/CookieClicker";
import Gif from "../pages/Gif";


const itemMenus = [
    {key: "1", path: "/", label: "Accueil"},
    {key: "2", path: "/rightprice", label: "Le Juste Prix"},
    {key: "3", path: "/calculator", label: "Calculator"},
    {key: "4", path: "/morpion", label: "Morpion"},
    {key: "5", path: "/mygame", label: "Mygame"},
    {key: "6", path: "/memory", label:"Memory"},
    {key: "7", path: "/cookieclicker", label: "CookieClicker"},
    {key: "8", path: "/gif", label: "Gif"},
    {key: "9", path: "/documentation", label: "Documentation"}
];
export default function MenuTop() {

    return (
        <>
            <Adb sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />&nbsp;
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Stream by Dwwm
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {itemMenus
                    .map((itemMenu) => (
                        <Button key={itemMenu.key} component={Link} to={itemMenu.path} color={"secondary"}>
                            {itemMenu.label}
                        </Button>
                    ))}
            </Box>
        </>
    )
}
export function LayoutMain() {
    return (
        <>
            <Routes>
                    <Route index element={<Home />} />
                    <Route path={"/rightprice"} element={<Rightprice/>}/>
                    <Route path={"/calculator"} element={<Calculator/>}/>
                    <Route path={"/morpion"} element={<Morpion/>}/>
                    <Route path={"/mygame"} element={<Mygame/>}/>
                    <Route path={"/cookieclicker"} element={<CoockieClicker/>}/>
                    <Route path={"/gif"} element={<Gif/>}/>
                    <Route path={"/documentation"} element={<Documentation/>}/>
            </Routes>
        </>
    )
}