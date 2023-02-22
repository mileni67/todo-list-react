import styled, { css } from "styled-components";

export const TasksList = styled.ul`
    list-style: none;   
    padding: 10px;
    margin: 10px;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns:  auto 1fr auto;
    text-decoration: none;
    grid-gap: 10px;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 10px;

    ${({ hidden }) => hidden && css`
    display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
    text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 25px;
    height: 25px;
    border: none;
    text-decoration: none;
    background-color: rgb(22, 143, 22);
    padding: 0px;
    cursor: pointer;
    transition: 1s;

    ${({ toggleDone }) => toggleDone && css`
        background: hsl(120, 61%, 34%);

        &:hover {
            background: hsl(120, 61%, 39%);
        }
    `}

    ${({ remove }) => remove && css`
        background-color: #FF405B;
        color: white;
        border: none;
        width: 25px;
        height: 25px;
        padding: 0px;
        cursor: pointer;
        transition: 1s;

        &:hover {
            background-color: hsl(352, 100%, 35%);
        }
    `}
`;