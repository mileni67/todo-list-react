import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: #fff;
    margin: 10px 0;
    box-shadow: 0 0 5px #ddd;
`;

export const ListName = styled.h2`
    margin: 0;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    border-bottom: 2px solid #eee;
    padding: 20px;
    margin: 0;
    text-align: center;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }

`;

