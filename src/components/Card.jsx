import styled from "styled-components";

export const Card = ({ pokemon }) => {
    const { name, image } = pokemon;

    return (
        <PokemonCard>
            <CardName>{name}</CardName>
            <img src={image} alt={name} />
        </PokemonCard>
    );
};

const PokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    height: 200px;
    width: 90%;
    background-color: #f0f0f0;
    box-shadow: 5px 5px 5px #888888;
`;

const CardName = styled.h2`
    text-transform: capitalize;
    margin-bottom: 10px;
`;
