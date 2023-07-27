import React, {useState, useEffect} from "react";
// on importe le premier module Grid pour dessiner la grille d'affichage des images GIF
import Grid from "../common/Grid";
// on importe le ssecond module GifImage pour pouvoir afficher les images GIF
import GifImage from "../common/gif/GifImage";

export default function Gif() {
    // Afin d'éviter que la fonction tourne en boucle (en prévention)
    const [started, setStarted] = useState(false);
    const [images, setImages] = useState([]);

    // On crée une constante pour récupérer les images d'une API en renseignant l'adresse https
    const getGif = async () => {
        // Afin d'éviter que la fonction tourne en boucle (en prévention)
        if (!started) {
            setStarted(true);
            const response = await fetch(
                "https://api.giphy.com/v1/gifs/search?api_key=lV037QsCl68DVDWbpwWfkvQYN8GASzjG&q=chat&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
            );
            const json = await response.json();
            // on affiche les images avec <GifImage item={item}/>));
            // Fonction setImages
            setImages(json["data"].map((item) => <GifImage item={item}/>));
        }
    };

    useEffect(() => {
        getGif();
    }, []);

    return (<Grid size={5} components={images}/>);
}