import React, {useEffect, useState} from "react";
import {Button} from "@mui/material"

export default function UpgradeButton({score, setScore, clickPower, setClickPower, setRestarted}) {

    // On définit les variables pour modifier la couleur du bouton en fonction de sa
    // disponnibilité
    const [color, setColor] = useState("error");

    // On définit les variables du cout de l'amélioration
    const [clickCost, setClickCost] = useState(5);


    // fonction qui vérifie les mise a jour produites sur le score
    // et modifie la couleur du bouton en conséquence :
    // - couleur "success" si le score est supérieur au cout de l'amélioration
    // - couleur "error" si le score est inférieur au cout de l'amélioration
    useEffect(() => {
            if (score >= clickCost) {
                setColor("success")
            } else {
                setColor("error")
            }
        }, [score]
    );


    // Fonction qui vérifie si le score est supérieur au cout de l'amélioration
    // Si c'est le cas la fonction va modifié :
    // - le cout de l'amélioration
    // - la puissance du click
    // - le score en retirant le cout de l'amélioration
    const handleClick = () => {
        if (score >= clickCost) {
            setClickPower(clickPower * 2);
            setClickCost(clickCost * 3);
            setScore(score - clickCost);
        }
        setRestarted(true);
    }

    return (
        <div  style={{marginBottom: "2vh"}}>
            <Button onClick={handleClick} variant="contained" color={color}>
                Amélioration : {clickCost}
            </Button>
        </div>
    );
}