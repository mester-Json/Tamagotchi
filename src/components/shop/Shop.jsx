import React, { useState } from "react";
import {
    H1,
    P,
    Button,
    Div,
    DivContainer
} from "./Shop.style";

function Shop() {
    const [balance, setBalance] = useState(10);
    const [items, setItems] = useState([
        { name: "Item 1", cost: 15 },
        { name: "Item 2", cost: 20 },
        { name: "Item 3", cost: 25 },
        { name: "Item 4", cost: 35 },
        { name: "Item 5", cost: 45 },
    ]);



    const buyItem = (cost) => {
        if (balance >= cost) {
            setBalance(balance - cost);
        } else {
            alert("Vous n'avez pas assez d'argent pour acheter cet article.");
        }
    };

    return (
        <DivContainer >
            <H1>Solde: {balance}</H1>
            <Div style={{
                overflowY: 'scroll', scrollbarWidth: 'none',
                msOverflowStyle: 'none',
            }}>
                {items.map((item, index) => (
                    <div key={index}>
                        <P>{item.name} - Coût: {item.cost}</P>
                        <Button onClick={() => buyItem(item.cost)}>Acheter</Button>
                    </div>
                ))}
            </Div>
        </DivContainer>
    );
}

export default Shop;