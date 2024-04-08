import styled from "styled-components";
import Paysage from './8f0280fc33d1b362da5a9435833435d6.gif';

export const PetsContainer = styled.div`
    display: block;
    justify-content: center;
    background-image: url(${Paysage});
    background-size: contain;
    background-repeat: no-repeat;
    width: 50%;
    margin: auto;
    margin-top: 150px;
    border-radius: 68px ;
`;

export const DivStat = styled.div`
    display: flex;
    justify-content: center;
    background-color: #8D86C9;
    border-radius: 68px 68px 0px 0px;
    border-bottom: 5px solid #242038;
`;


export const Stat = styled.p`
    display: inline-block;
    text-align: center;
    margin-left: 50px;
    margin-right: 50px;
    width: 100px;
    background-color:#242038 ;
    color: #F7ECE1 ;
    padding: 15px;
    border-radius: 20px;
    boder: none;
    font-size: 14px;
`;

export const DivPets = styled.div`
    display: flex;
    width: 350px;
    height: 350px;
    background-size: cover;
    margin-top:20px;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 20px;
`;


export const DivSoin = styled.div`
    display: flex;
    justify-content: center;
    background-color: #8D86C9;
    border-radius: 0px 0px 68px 68px;
    margin-top: 100px;
    border-top: 5px solid #242038;
    padding:15px;
`;

export const Soin = styled.button`
    display: inline-block;
    text-align: center;
    margin-left: 50px;
    margin-right: 50px;
    width: 95px;
    background-color:#242038 ;
    color: #F7ECE1 ;
    padding: 10px;
    border-radius: 20px;
    border: none;
    font-size: 10px;
`;

export const Reset = styled.button`
    display: inline-block;
    text-align: center;
    height:25px;
    width: 25px;
    margin-left: 50px;
    margin-right: 50px;
    background-color:#242038 ;
    color: #F7ECE1 ;
    border-radius: 90px;
    border:5px solid #F7ECE1;
    border-style: double  ; 
    cursor: pointer;
`;