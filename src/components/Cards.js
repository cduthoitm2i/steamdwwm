import { useState } from 'react'
// On utilise le component react Card pour afficher les cartes (https://mui.com/material-ui/react-card/)
import Card from './Card'

export default function Cards(){
    // On définit une constante dans laquelle on appelle les images se trouvant dans le dossier img
    // les images sont appelés deux fois puisque c'est une paire d'image identique que l'on cherche
    // ensuite, une fonction Math.random les place de manière aléatoire dans la grille
    const [items, setItems] = useState([
        { id: 1, img: '/img/html.png', stat: "" },
        { id: 1, img: '/img/html.png', stat: "" },
        { id: 2, img: '/img/css.png', stat: "" },
        { id: 2, img: '/img/css.png', stat: "" },
        { id: 3, img: '/img/js.png', stat: "" },
        { id: 3, img: '/img/js.png', stat: "" },
        { id: 4, img: '/img/scss.png', stat: "" },
        { id: 4, img: '/img/scss.png', stat: "" },
        { id: 5, img: '/img/react.png', stat: "" },
        { id: 5, img: '/img/react.png', stat: "" },
        { id: 6, img: '/img/vue.png', stat: "" },
        { id: 6, img: '/img/vue.png', stat: "" },
        { id: 7, img: '/img/angular.png', stat: "" },
        { id: 7, img: '/img/angular.png', stat: "" },
        { id: 8, img: '/img/nodejs.png', stat: "" },
        { id: 8, img: '/img/nodejs.png', stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [precedant, setPrecedant] = useState(-1)

    // Fonction pour comparer les deux cases sélectionnées
    // si les deux cases sont corrects, on affiche le message correct, ce qui fait le lien avec la css .card.correct et affecte au background la couleur verte à la case
    function check(courant){
        if(items[courant].id == items[precedant].id){
            items[courant].stat = "correct"
            items[precedant].stat = "correct"
            setItems([...items])
            setPrecedant(-1)
        }
        // si les deux cases sont différentes, on affiche le message wrong, ce qui fait le lien avec la css .card.wrong et affecte au background la couleur rouge à la case
        else{
            items[courant].stat = "wrong"
            items[precedant].stat = "wrong"
            setItems([...items])
            // on revient à l'état initial avec un timeout de 1 seconde (1000) comme les deux images sont différentes
            setTimeout(() => {
                items[courant].stat = ""
                items[precedant].stat = ""
                setItems([...items])
                setPrecedant(-1)
            }, 1000)
        }
    }

    // On intercepte par la fonction handleClick quand on clique sur une case
    function handleClick(id){
        if(precedant === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrecedant(id)
        }else{
            check(id)
        }
    }
    // On fait le return pour afficher la div contenant les 16 cases du jeu (autant qu'il y a d'item)
    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}
