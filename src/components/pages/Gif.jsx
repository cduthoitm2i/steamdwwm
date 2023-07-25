import {useState} from "react";
import {json} from "react-router-dom";



export default function Gif(){

    const [data, setData] = useState("")
    const [started, setStarted] = useState(false)

    const gridStyle = {
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
    }

    const getGif = async() => {
        if (!started) {
            setStarted(true);
            var response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=lV037QsCl68DVDWbpwWfkvQYN8GASzjG&q=coucou&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips")
            var json = await response.json();
            console.log(json)
            setData(JSON.stringify(json))
    }
}

getGif()
return(

    <div style={gridStyle}>

    </div>
)
}
