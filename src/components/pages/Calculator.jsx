import React, {useState} from "react";

import AdditionLevel, {DataProcess} from "../services/AdditionLevel";
import {Button, TextField} from "@mui/material";
import "../../components/styles/calculator.css"

export default function Calculator() {
    const [inputKeyboard, setInputKeybord] = useState(0);
    const [modeSend, setModeSend] = useState(false);
    const [resultAdd, setResultAdd] = useState(0);
    const changeResult = (newResult) => {
        setResultAdd(newResult)
    }
    const textStyle = {
        color:"red",
        fontSize:"50px"
    }

    return (
        <div>
            <h1 style={textStyle}>Calculator coming soon</h1>
            <AdditionLevel changeResult={changeResult}/><br/>
            <TextField
                color={"success"}
                variant={"outlined"}
                defaultValue={" "}
                onChange={event => setInputKeybord(event.target.value)}
            /><br/>
            <Button onClick={() => {setModeSend(true)}}>Envoyer</Button>
            {modeSend && <DataProcess inputKeyword={inputKeyboard} resultAdd={resultAdd} />}

        </div>
    )
}