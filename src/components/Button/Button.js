 import styled, { css } from 'styled-components';

 const Button = styled.button`
    padding: 0;
    background-color: #ffd82b;
    width: ${({width}) => width || '220px'};
    height: 47px;
    border: none;
    border-radius: 50px;
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;

    ${({secondary}) => (
        secondary && css`
            background-color: #E6E6E6;
            width: 105px;
            height: 30px;
            font-size: 10px;
        `
    )}
 `;

 export default Button;