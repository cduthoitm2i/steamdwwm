export default function Grid({size, components}) {
    // On définit une constante pour la largeur en fonction de la taille de la fenêtre
    const width = ((80 - 4 - (2 * (size - 1))) / size);
    let i = 0;
    // On définit une constante pour le style
    const gridStyle = {
        paddingLeft: "2vw",
        paddingRight: "2vw",
        width: "80vw",
        paddingTop: "2vw",
        paddingBottom: "2vw",
        backgroundColor: "#2a3442",
        marginLeft: "auto",
        marginRight: "auto",
        display: "grid",
    };

    const table = [];

    const placeComponents = () => {
        for (const componentsKey in components) {
            table.push(
                <div style={{
                    width: width + "vw",
                    gridColumn: i + 1 - (5 * (Math.ceil((i + 1) / size) - 1)),
                    gridRow: Math.ceil((i + 1) / size),
                    marginTop: "2vw",
                    marginBottom: "2vw",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "grid",
                    alignItems: "center",
                }}>
                    {components[i]}
                </div>
            );
            i++;
            console.log("I: " + i)
        }
    };

    placeComponents();

    return (
        <div style={gridStyle}>
            {
                table.map((item) => (
                    <>
                        {item}
                    </>
                ))
            }
        </div>
    );
}