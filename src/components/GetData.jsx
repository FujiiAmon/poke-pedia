import { useEffect, useState } from "react";
import { Card } from "./Card";
import styled from "styled-components";
import { getPokemon } from "../utils/getPokemon";

export const GetData = () => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const [allPokemon, setAllPokemon] = useState(null);

    useEffect(() => {
        new Promise((resolve) => resolve(getPokemon(url))).then((pokemon) =>
            setAllPokemon(pokemon)
        );
        // console.log(allPokemon);
    }, [allPokemon == null]);

    return (
        <div>
            {allPokemon == null ? (
                <h1>loading...</h1>
            ) : (
                <CardContainer>
                    {allPokemon.map((val, key) => {
                        return <Card key={key} pokemon={val} />;
                    })}
                </CardContainer>
            )}
        </div>
    );
};

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
`;
