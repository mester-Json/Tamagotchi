import React, { useState, useEffect } from 'react';
import {
    DivStat,
    PetsContainer,
    Stat,
    DivSoin,
    Soin,
    Reset,
    DivPets
}
    from './Pets.style';

function Pets() {
    const [faim, setFaim] = useState(1000);
    const [fatigue, setFatigue] = useState(1000);
    const [poop, setPoop] = useState(0);
    const [game, setGame] = useState(5000);

    useEffect(() => {
        const interval = setInterval(() => {
            setFaim(faim => {
                // if (faim <= 0) {
                //     alert('Votre tamagotchi est mort de faim');
                //     clearInterval(interval);
                //     window.location.reload();
                // }
                if (faim <= 50) {
                    setPoop(poop => poop + 1);
                }
                return faim > 0 ? faim - 1 : 0;
            });
            setGame(game => {
                // if (game <= 0) {
                //     alert('Votre tamagotchi est mort d\'ennui');
                //     clearInterval(interval);
                //     window.location.reload();
                // }
                return game > 0 ? game - 10 : 0;
            });
            setFatigue(fatigue => {
                // if (fatigue <= 0) {
                //     alert('Votre tamagotchi est mort de fatigue');
                //     clearInterval(interval);
                //     window.location.reload();
                // }
                return fatigue > 0 ? fatigue - 1 : 0;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const resetTamagotchi = () => {
        setFaim(1000);
        setFatigue(1000);
        setGame(5000);
        setPoop(0);
    };

    return (
        <PetsContainer>
            <DivStat>
                <Stat>Faim: {faim}</Stat>
                <Stat>Game: {game}</Stat>
                <Stat>Fatigue: {fatigue}</Stat>
                <Stat>Excréments: {poop}</Stat>
            </DivStat>
            <DivPets>
            </DivPets>
            <DivSoin>
                <Soin onClick={() => {
                    setFaim(faim => faim + 10)
                    setPoop(poop => poop + 10)
                }}
                >Nourrir</Soin>
                <Soin onClick={() => {
                    setFatigue(fatigue => fatigue > 10 ? fatigue - 10 : 0);
                    setGame(game => game + 10);
                }}>Jouer</Soin>
                <Reset onClick={resetTamagotchi}></Reset>
                <Soin onClick={() => setPoop(poop > 5 ? poop - 5 : 0)}>Nettoyer</Soin>
                <Soin onClick={() => setFatigue(fatigue => fatigue + 10)}>Reposer</Soin>
            </DivSoin>
        </PetsContainer>
    );
}

export default Pets;