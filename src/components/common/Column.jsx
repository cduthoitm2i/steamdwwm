export default function Column({components}) {
    // Définition du style (on fait un affichage en grille afin de pouvoir aligner horizontalement et verticalement)
    const gridStyle = {
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
    }

    return (
        <>
            {/* On applique de la CSS à l'aide du style nommé gridStyle */}
            <div style={gridStyle}>
                {components}
            </div>
        </>
    );
}