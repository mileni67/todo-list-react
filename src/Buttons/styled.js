import styled from "styled-components";

export const ButtonList = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
}

`;

export const StyledButton = styled.button`
    border: none;
    background-color: transparent;
    color: hsl(180, 100%, 25%);
    transition: 1s;
    cursor: pointer;

    &:hover {
        color: hsl(180, 100%, 30%);
    }

    &:active {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: lightgray;
    }
`;