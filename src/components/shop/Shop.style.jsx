import styled from 'styled-components';

export const H1 = styled.h1`
    color: white;
    font-size: 40px;
    margin-top: -570px;
    margin-left: 1000px;
    margin-bottom: 50px;
    text-decoration: underline solid #8D86C9;
`;

export const P = styled.p`
    color: white;
    font-size: 20px;
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
    margin-top: 0px;
    margin-left: 1000px; 
    background-color: #8D86C9;
    border-radius: 68px;
    width: 300px;      
    height: 416px;
    padding: 20px;
`;

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;