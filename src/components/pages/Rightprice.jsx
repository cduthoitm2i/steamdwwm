import React, {useEffect, useState} from "react";
import {Alert, Button, TextField} from "@mui/material";

export default function RightPrice() {
    const [myPrice,setMyprice] = useState("");
    const [randomPrice, setRandomPrice] = useState(0)
    const [message, setMessage] = useState(false)
    const [messageCategory, setMessageCategory] = useState("")
    const [randomCategory, setRandomCategory] = useState(0)

    const categoryRandom = () => {
        const _categoryRandom = Math.round(Math.random()*(1,3));
        setRandomCategory(_categoryRandom)
    }

    useEffect(()=>{
        if(randomCategory === 0) categoryRandom()
    }, [randomCategory])

    useEffect(() => {
        if (randomCategory === 1) {
            const _priceRandom = Math.round(Math.random() * (10,200));
            setRandomPrice(_priceRandom)
            setMessageCategory('Le prix à découvrir est un vetement compris entre 10€ et 200€')
        }
        if (randomCategory === 2) {
            const _priceRandom = Math.round(Math.random() * (5000,50000));
            setRandomPrice(_priceRandom)
            setMessageCategory('Le prix à découvrir est une voiture compris entre 5 000€ et 50 000€')
        }
        if (randomCategory === 3) {
            const _priceRandom = Math.round(Math.random() * (900000,400000));
            setRandomPrice(_priceRandom)
            setMessageCategory('Le prix à découvrir est une maison compris entre 90 000€ et 400 000€')
        }
    }, [randomCategory])

    const handleClick = () => {

        if (myPrice === "123cheat") alert(`"cheat Mode": ${randomPrice} €.`)
        if (myPrice < randomPrice) setMessage('plus')
        if (myPrice > randomPrice) setMessage('moins')
        if (myPrice == randomPrice) setMessage('gagne')
    }

    return (
        <div>
            <h1>Right Price Coming soon</h1>
            {messageCategory && messageCategory}<br/>
            <TextField
                color={"success"}
                variant={"outlined"}
                //label={"Hello"}
                defaultValue={"Quel est votre prix"}
                onChange={event => setMyprice(event.target.value)}
            /><br/><br/>
            <Button onClick={handleClick}>Envoyer</Button><br/><br/>
            {message && message === 'plus' ? <Alert variant={"filled"} severity={"info"}>C'est plus</Alert>
                : message === 'moins' ? <Alert variant={"filled"} severity={"warning"}>C'est moins</Alert>
                    :  <Alert variant={"filled"} severity={"success"}>C'est gagné!!!!</Alert>
            }
        </div>
    )
}