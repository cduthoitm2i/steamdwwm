import React, {useState, useEffect} from "react";
import Cookie from "../common/cookieClicker/Cookie"
import Score from "../common/cookieClicker/Score"
import Column from "../common/Column"
import UpgradeButton from "../common/cookieClicker/UpgradeButton"
import {Button} from "@mui/material";
import AutoCookieClickers from "../workers/AutoCookieClickers"

export default function CoockieClicker() {

    // On définit les variables du score
    const [score, setScore] = useState(0);

    // On définit les variables de l'augmentation du score a chaques amélioration
    const [clickPower, setClickPower] = useState(1);

    const [autoClickPower, setAutoClickPower] = useState(1);

    const [started, setStarted] = useState(false);
    const [restarted, setRestarted] = useState(false);



    useEffect(() => {
        if (!started) {
            setStarted(true);
            const it = setInterval(() => {
                console.log(autoClickPower)
                setScore((score) => score + autoClickPower);
            }, 1000);
        }
    }, []);

    useEffect(() => {
        if (restarted) {
            clearInterval(it);
            setStarted(false);
            setRestarted(true)
        }
    }, [restarted]);


    return (
        // Componnent qui prends en parametres plusieurs componnents pour les
        // rangé en colonne
        <Column components={
            [
                <Score score={score} colNumber={0}/>,
                <Cookie setScore={setScore} score={score} clickPower={clickPower} colNumber={0}/>,
                <div style={{gridColumn: 2, gridRow: 2}}>
                    <UpgradeButton score={score} setScore={setScore} clickPower={clickPower}
                                   setClickPower={setClickPower}/>
                    <UpgradeButton score={score} setScore={setScore} autoClickPower={autoClickPower}
                                   setClickPower={setAutoClickPower} setRestarted={setRestarted}/>
                </div>
            ]
        }/>
    )
}