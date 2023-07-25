import React from "react";

export default function Score({score, colNumber}) {
    // Définition du style pour le texte Score se trouvant au-dessus de l'image du cookie
    const scoreStyle = {
        gridRow: 1,
        gridColumn: colNumber,
        color: "white",
    }

    return (
        <>
            {/* On applique de la CSS à l'aide du style nommé scoreStyle */}
            <h1 style={scoreStyle}>Score : {score}</h1>
        </>
    );
}