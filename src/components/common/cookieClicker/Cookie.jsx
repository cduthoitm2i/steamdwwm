import React from "react";

export default function Cookie({setScore, score, clickPower, colNumber}) {

    const cookieStyle = {
        width: "20vw",
        height: "20vw",
        gridRow: 2,
        gridColumn: colNumber,
    }

    const handleClick = () => {
        setScore(score + clickPower);
        console.log(score);
    }

    return (
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Crystal_Project_cookie.png"
            style={cookieStyle}
            onClick={handleClick}
        ></img>
    )
}