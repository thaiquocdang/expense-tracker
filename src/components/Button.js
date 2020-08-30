import styled from 'styled-components';

const Button = styled.button`
background: ${props => props.primary ? "rgb(255, 140, 70)" : "white"};
color: ${props => props.primary ? "white" : "rgb(255, 140, 70)"};

font-size: 1em;
margin: 10px 0 30px;
padding: 0.5em 1em;
border: 1px solid rgb(255, 140, 70);
border-radius: 1px;
width: 100%;
cursor: pointer;

&:hover {
    transform: scale(0.98);
}
`;

const ButtonNew = styled.button`
${Button}:hover & {
    transform: scale(0.8);
}
`;

export {Button};
export {ButtonNew};

