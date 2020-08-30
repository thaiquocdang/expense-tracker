import styled from 'styled-components';

const Button = styled.button`
background: ${props => props.primary ? "rgb(255, 140, 70)" : "darkcyan"};
color: white ;

font-size: 1em;
margin: 10px 0 30px;
padding: 0.5em 1em;
border: 0;
border-radius: 1px;
width: ${props => props.primary ? "100%" : "20%"};
cursor: pointer;
outline: none;

&:hover {
    transform: scale(0.98);
}

}
`;

const ButtonNew = styled.button`
${Button}:hover & {
    transform: scale(0.8);
}
`;

export {Button};
export {ButtonNew};

