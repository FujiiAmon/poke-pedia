import styled from "styled-components";

export const Navbar = () => {
    return <Nav>POKE-PODIA</Nav>;
};

const Nav = styled.h1`
    background-color: orange;
    color: white;
    width: 100%;
    text-align: center;
    padding: 10px;
    margin: 0;
    font-family: "Arial";
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
`;
