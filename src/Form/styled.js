import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;

    @media (max-width: 767px) {
    grid-template-columns: 1fr;
}
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid hsl(0, 0%, 83%);
`;

export const AddButton = styled.button`
    padding: 10px;
    border: none;
    background-color: hsl(180, 100%, 25%);
    color: white;
    transition: 1s;
    cursor: pointer;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.1);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }

    @media (max-width: 767px) {
    &:hover {
        transform: scaleY(1.1);
    }
}
`;