import styled from "styled-components";

export const Card = ({ pokemon }) => {
    const { name, image } = pokemon;

    return (
        <PokemonCard>
            <p>{name}</p>
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
    width: 200px;
    height: 200px;
    background-color: #f0f0f0;
`;
