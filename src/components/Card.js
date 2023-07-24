export default function Card({item, id, handleClick}){
    const itemClass = item.stat ? " active " + item.stat : ""

    return (
        /* On retourne une div dans laquelle on représente le comportement d'une case (dans Cards, c'est dupliqué pour toutes les cartes) */
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt="" />
        </div>
    )
}
