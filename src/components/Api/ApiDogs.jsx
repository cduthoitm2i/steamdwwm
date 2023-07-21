import React, {useEffect, useState} from "react";
import {Avatar} from "@mui/material";

export default function ApiDogs() {
    const [dog, setDog] = useState("")
    //https://dog.ceo/api/breeds/image/random

    const fetchDog = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response)=> response.json())
            .then((data) => setDog(data))
    }

    useEffect(()=> {
        fetchDog()
    }, [])

    useEffect(() => {
        console.log("Api", dog)
    }, [dog])

    return (
        <div>
            <Avatar
                alt="Remy Sharp"
                src={dog.message}
                sx={{ width: 300, height: 300 }}
            />

        </div>
    )
}