import React, {useState} from "react";
import Cards from "../common/Cards"
import Cookies from 'universal-cookie';

export default function Memory() {

    const urls = [
        "https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Starbucks_Coffee_Logo.svg/200px-Starbucks_Coffee_Logo.svg.png",
        "https://www.burhantec.com/wp-content/uploads/2017/12/dell-logo-preview-200x200.png",
        "https://logoeps.com/wp-content/uploads/2011/04/intel-vector-logo-200x200.png",
        "https://logodownload.org/wp-content/uploads/2017/05/google-chrome-logo-12.png",
        "https://www.freeiconspng.com/uploads/youtube-play-logo-png-5.png",
        "https://static.vecteezy.com/system/resources/thumbnails/018/930/745/small/twitter-logo-twitter-icon-transparent-free-free-png.png",
    ]

    const [urlss, setUrlss] = useState("test");
    const [rota, setRota] = useState(true);

    var cardsCount = 9;

    const randomizeCards = () => {
        const numbers = new Map();
        var array = []
        for (let j = 0; j < cardsCount; j++) {
            array[j] = j;
        }

        const shuffledArray = array.sort((a, b) => (0.5 - Math.random()));

        let x = 0;
        let i = 0;
        for (i; i < cardsCount / 2; i++) {
            numbers.set(shuffledArray[i], urls[x]);
            x++;
        }

        x = 0;
        for (i; i < cardsCount; i++) {
            numbers.set(shuffledArray[i], urls[x]);
            x++;
        }

        const cards = new Map([...numbers.entries()].sort())

        cards.forEach((value, key) => {
            console.log(key + ": " + value)
        })
        localStorage.setItem("cards", cards)
        return cards;
    }

    const setupCards = () => {
        var cards = randomizeCards();
        console.log("Local storage : " + localStorage.getItem("cards").length);

        for (let itemKey in localStorage.getItem("cards")) {
        }
        var c = 1;
        var r = 1;
        let divider = 0;


        if (cardsCount % 3 === 0) {
            divider = 3;
        } else if (cardsCount % 4 === 0) {
            divider = 4;
        }

        return (
            <>
                {Array.from(cards).map(([key, value]) => {
                    const cardPos = "c" + c + "r" + r;
                    if (c == 3) {
                        r++;
                        c = 1;
                    } else {
                        c++;
                    }
                    return (
                        <Cards id={key} url={value} pos={cardPos} rota={false}/>
                    );
                })}
            </>
        );
    }

    const cacheStyle = {
        backgroundColor: "red",
        zIndex: "10",
        width: "15vw",
        height: "35vh",
        borderRadius: "2vw",
    }

    const mainStyle = {
        backgroundColor: "#2a3442",
        width: "100%",
        paddingTop: "10vh",
        paddingBottom: "10vh",
        borderRadius: "15px",
        display: "grid",
        gridGap: "5vw",
        justifyContent: "center",
        alignContent: "center",
    }

    return (
        <div style={mainStyle}>
            {setupCards()}

        </div>
    )
}