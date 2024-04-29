import styled from 'styled-components';
import Shop from './supermarket-trading-room-carton-vector-interior_1441-2908.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const H1 = styled.h1`
    color: white;
    font-size: 30px;
    margin-top: -35px;
    margin-left: 95px;
`;

export const Icon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 30px;
    margin-top: 25px;  
    margin-left: 50px;
`;

export const DivSolde = styled.div`
    width: 10%;
    margin-top: -75px;
    margin-right: 1430px;
    margin-bottom: 50px;
    background-color: #242038;
    border-top-left-radius:  20px;
    border-top-right-radius: 20px;
    padding: 5px;
`;

export const Description = styled.p`
    position: absolute;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
`;

export const P = styled.p`
    color: black;
    padding: 5px;
    font-weight: bold;
    font-size: 20px;
    cursor: help;
    /* &:hover + ${Description} {
        display: block;
        background-color: white;
        color: black;
        padding: 10px;
        border-radius: 20px;
        margin-top: 10px;
        position: absolute;
    } */
`;

export const Button = styled.button`    
    background-color: #242038;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 10px;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #5b4478;
        transform: scale(1.1);
        color: white;
    }
`;
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -50px;
    margin-right: 1430px; 
    background-image: url(${Shop});
    background-size: cover;
    border-radius: 20px;
    width: 300px;      
    height: 416px;
    padding: 20px;

`;

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DivPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    border-radius: 20px;
    backdrop-filter: blur(5px);
    width: 100%;

`;