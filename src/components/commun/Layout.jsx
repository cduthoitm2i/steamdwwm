import React, {useState} from "react";
import {
    AppBar, Container,
    createTheme,
    CssBaseline,
    FormControlLabel, FormGroup,
    Switch,
    ThemeProvider,
    Toolbar
} from "@material-ui/core";
import MenuTop from "./MenuTop";




export default function Layout() {
    const themeDark = createTheme({
        palette: {
            background: {
                paper: '#007be0',
                default: '#001e3c'
            },
            text: {
                primary: '#ffffff'
            }
        }
    })

    const themeLight = createTheme({
        palette: {
            background: {
                paper: '#84848c',
                default: '#c8def5'
            }
        }
    })
    const [labelTheme, setLabelTheme] = useState('Theme sombre')
    const [dark, setDark]= useState(true)
    const handleChange = () => {
        labelTheme === "Theme sombre" ? setLabelTheme('Theme clair') : setLabelTheme('Theme sombre')
    }

    return (
        <ThemeProvider theme={dark === true ? themeDark : themeLight}>
            <CssBaseline />
            <AppBar position="fixed">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <MenuTop />
                        <FormGroup sx={{display: {xs:'none', md:'flex'}}}>
                            <FormControlLabel
                                control={<Switch sx={{m:1}} defaultChecked color="secondary"/>}
                                onChange={handleChange}
                                onClick={dark === true ? ()=>{setDark(false)} : () =>{setDark(true)}}
                                value={labelTheme}
                                label={labelTheme}
                            />
                        </FormGroup>
                    </Toolbar>
                </Container>
            </AppBar>

        </ThemeProvider>
    )
}
