import React, {useState, useEffect} from "react";
import Grid from "../common/Grid";
import GifImage from "../common/gif/GifImage";

export default function Gif() {
    const [started, setStarted] = useState(false);
    const [images, setImages] = useState([]);

    const getGif = async () => {
        if (!started) {
            setStarted(true);
            const response = await fetch(
                "https://api.giphy.com/v1/gifs/search?api_key=lV037QsCl68DVDWbpwWfkvQYN8GASzjG&q=chat&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
            );
            const json = await response.json();
            setImages(json["data"].map((item) => <GifImage item={item}/>));
        }
    };

    useEffect(() => {
        getGif();
    }, []);

    return (<Grid size={5} components={images}/>);
}