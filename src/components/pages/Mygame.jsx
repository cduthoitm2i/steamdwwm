import React from "react";
/* Appel de la CSS en pointant vers le dossier contenant le fichier css mygame.css */
import "../../components/styles/mygame.css"
import Cards from "../Cards";

export default function Mygame() {

    return(
        <div>
            <h1>Match It</h1>
            {/* Appel du fichier Cards */}
            <Cards />
        </div>
    )
}