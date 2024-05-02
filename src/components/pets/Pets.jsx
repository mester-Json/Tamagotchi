import React, { useState, useEffect, useRef } from 'react';
import {
    DivStat,
    PetsContainer,
    Stat,
    DivSoin,
    Soin,
    Reset,
    DivPets,
    Img,
    P
}
    from './Pets.style';
import pkmWalk from './043.png';
import pkmEat from './004.png';
import pkmPlay from './007.png';
import pkmSleep from './001.png';
import pkmPoop from './037.png';
import Shop from '../shop/Shop';
import { faShop } from '@fortawesome/free-solid-svg-icons';


function Pets() {
    const [faim, setFaim] = useState(100);
    const [fatigue, setFatigue] = useState(100);
    const [poop, setPoop] = useState(0);
    const [game, setGame] = useState(50);

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
        window.location.reload();

    };

    const [animation, setAnimation] = useState('walk');
    const [actionAnimation, setActionAnimation] = useState(null);
    const petsRef = useRef(null);

    useEffect(() => {
        if (faim < 50) {
            setAnimation('eat');
        } else if (game < 25) {
            setAnimation('play');
        } else if (fatigue < 50) {
            setAnimation('sleep');
        } else if (poop > 50) {
            setAnimation('poop');
        } else if (!actionAnimation) {
            setAnimation('walk');
        }
    }, [faim, game, fatigue, poop, actionAnimation]);

    let pkm;
    switch (actionAnimation || animation) {
        case 'walk':
            pkm = pkmWalk;
            break;
        case 'eat':
            pkm = pkmEat;
            break;
        case 'play':
            pkm = pkmPlay;
            break;
        case 'sleep':
            pkm = pkmSleep;
            break;
        case 'poop':
            pkm = pkmPoop;
            break;
        default:
            pkm = pkmWalk;
    }

    useEffect(() => {
        const petsElement = petsRef.current;
        let position = 0;
        let direction = Math.random() < 10.5 ? -1 : 1;

        let positionY = 0;
        let directionY = Math.random() < 10.5 ? -1 : 1;

        function animate() {
            if (animation === 'walk') {
                position += direction / 2;
                positionY += directionY / 2;
                if (position > 550 || position < 0) {
                    direction *= -1;
                } else if (Math.random() < 0.01) {
                    direction *= -1;
                }

                if (positionY > 250 || positionY < 0) {
                    directionY *= -1;
                } else if (Math.random() < 0.01) {
                    directionY *= -1;
                }

                petsElement.style.transform = `translate(${position}px, ${positionY}px)`;
            }

            requestAnimationFrame(animate);
        }

        animate();
    }, [animation]);

    const [shopVisible, setShopVisible] = useState(false);

    const toggleShop = () => {
        setShopVisible(shopVisible => !shopVisible);

    }
    const [balance, setBalance] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setBalance((prevBalance) => prevBalance + 1);
        }, 300);

        return () => clearInterval(interval);
    }, []);
    return (
        <div>

            <PetsContainer>
                <DivStat>
                    <Stat>Faim: {faim}</Stat>
                    <Stat>Game: {game}</Stat>
                    <Stat>Fatigue: {fatigue}</Stat>
                    <Stat>Excréments: {poop}</Stat>
                </DivStat>
                <DivPets ref={petsRef}>
                    <Img src={pkm} alt="pkm" />
                </DivPets>
                <DivSoin>
                    <Soin onClick={() => {
                        setFaim(faim => faim + 10)
                        setPoop(poop => poop + 10);
                        setActionAnimation('eat')
                    }}
                    >Nourrir</Soin>
                    <Soin onClick={() => {
                        setFatigue(fatigue => fatigue > 10 ? fatigue - 10 : 0);
                        setGame(game => game + 10);
                        setActionAnimation('play');
                    }}>Jouer</Soin>
                    <Reset onClick={resetTamagotchi}></Reset>
                    <Soin onClick={() => {
                        setPoop(poop > 5 ? poop - 5 : 0);
                        setActionAnimation('poop');
                    }}>Nettoyer</Soin>
                    <Soin onClick={() => {
                        setFatigue(fatigue => fatigue + 10);
                        setActionAnimation('sleep');
                    }}>Reposer</Soin>
                </DivSoin>

            </PetsContainer>
            <P onClick={toggleShop}>&lt;</P>
            {shopVisible && <Shop balance={balance} setBalance={setBalance} />}
        </div>

    );
}

export default Pets;