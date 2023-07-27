import React, {useEffect, useState} from "react";
import ApiDogs from "../api/ApiDogs";

export default function AdditionLevel({changeResult}) {
    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);
    const [resultAdd, setResultAdd] = useState("")

    const randomNumbers = () => {
        const _firstNum = Math.round(Math.random()*(1,200));
        setFirstNum(_firstNum);
        const _secondNum = Math.round(Math.random()*(1,200));
        setSecondNum(_secondNum)


    }

    useEffect(()=>{
        if (firstNum === 0) randomNumbers()
        if (firstNum >0 ) setResultAdd(firstNum + secondNum)
    },[firstNum, secondNum])

    const changeResultNow = () => {
        changeResult({resultAdd})
    }

    useEffect(()=>{
        if(changeResult) changeResultNow()
    }, [resultAdd])
    //log
    useEffect(()=> {
        console.log("premier chiffre", firstNum);
        console.log("deuxieme chiffre", secondNum);
        console.log("Resultat addition", resultAdd);
    },[firstNum, secondNum, resultAdd])

    return (
        <>
            Calculer : {firstNum && firstNum} + {secondNum && secondNum}

        </>
    )
}

export function DataProcess({inputKeyword, resultAdd}) {


    const [message, setMessage] = useState("")


    useEffect(() => {
        if (inputKeyword == resultAdd.resultAdd) setMessage("gagné")
        if (inputKeyword != resultAdd.resultAdd) setMessage("perdu")
        console.log("DataProcess inputkey", inputKeyword)
        console.log("DataProcess result", resultAdd.resultAdd)

    }, [inputKeyword, resultAdd])

    useEffect(()=>{
        console.log("Message", message)
    }, [message])


    return (
        <>
            {message === "gagné" ? <ApiDogs/> : message}
        </>
    )
}