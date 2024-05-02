import React, { useEffect, useState } from "react";
import {
    H1,
    P,
    Button,
    Div,
    DivContainer,
    DivPrice,
    Icon,
    DivSolde,
    Description
} from "./Shop.style";
import { faCoins } from '@fortawesome/free-solid-svg-icons';

function Shop({ balance, setBalance, }) {
    const [items, setItems] = useState([
        { id: 1, name: "Balon", cost: 15, description: "Un ballon pour mais apport du bonheur à votre tamagotchi " },
        { id: 2, name: "Chips", cost: 20, description: "Des Chips qui reduit le taux de faim de 5% mais les envies d'aller au toillet augement " },
        { id: 3, name: "Switch50", cost: 25, description: "Une console de jeux trés utiles mais pas asser performante mais qui augemnte le Game 2.5% mais la fatigue augemente 1.5% mais la faim augemente 2%" },
        { id: 4, name: "Chaise", cost: 35, description: "Une chaise qui lui sert de lit pour dormir elle reduis la fatigue de 1% mais augemente la tristesse car une chaise ne sert pas a domire" },
        { id: 5, name: "Buger", cost: 45, description: "Un Buger qui reduit le taux de faim 15% mais les envie d'aller au toillette augemente beaucoup" },
        { id: 6, name: "Xbox180", cost: 50, description: "Une Console de jeux meilleur que la Switch50 mais il reste un noob au jeux video mais quand même augemente le bonheur 10% mais aussi augemente le taux de faim de 4% car un gamer a faim est augemter le taux de fatigue de 3%  " },
        { id: 7, name: "Giga Tacos", cost: 55, description: "Un Giga Tacos trois viande reduis beaucoup le taux de faim de 30% car un giga tacos c'est giga bon mais en retour le taux d'aller au toillet augementer beaucoup car un tacos ca fait chier " },
        { id: 8, name: "Lits 2P", cost: 60, description: "Un Lit 2 place qui reduis beaucoup le taux de fatigue de 30% " },
        { id: 9, name: "Pc Gamer", cost: 70, description: "Un Vrais pc gamer full rgb pour avoir full fps en game  mais joue a lol tout les jour mais augemte 30% le game mais augemente le taux de faim 5% car il préfere grind le lader que manger est augemente le taux de fatigue de 6% car il ne vas jamais domir il dit toujour une dernier celle ci c'est la bonne  " },
        { id: 10, name: "Toillette", cost: 10000, description: "Une toillette en or qui reduis le taux d'aller au toillette de 25% car il est devenue champoin du monde sur lol donc il ce permet d'acheter des choitte en or " },
    ]);

    const toggleDescription = (id) => {
        setItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === id) {
                    return { ...item, showDescription: !item.showDescription };
                }
                return item;
            });
        });
    }



    const buyItem = (cost) => {
        setBalance((prevBalance) => {
            if (prevBalance >= cost) {
                return prevBalance - cost;
            } else {
                alert("Solde insuffisant");
                return prevBalance;
            }
        }
        )
    }


    return (
        <DivContainer >
            <DivSolde>
                <Icon icon={faCoins} />
                <H1> {balance} $</H1>
            </DivSolde>

            <Div style={{
                overflowY: 'scroll', scrollbarWidth: 'none',
                msOverflowStyle: 'none',
            }}>
                {items.map((item, index) => (
                    <DivPrice key={index}>
                        <P>{item.name} - Coût: {item.cost}</P>
                        {item.showDescription ?
                            <Description onClick={() => toggleDescription(item.id)}>{item.description}</Description>
                            :
                            <P onClick={() => toggleDescription(item.id)}>?</P>
                        }
                        <Button onClick={() => buyItem(item.cost)}>Acheter</Button>
                    </DivPrice>
                ))}

            </Div>
        </DivContainer>
    );
}

export default Shop;