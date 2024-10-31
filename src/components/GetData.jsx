import { useEffect, useState } from "react";
import { Card } from "./Card";
import styled from "styled-components";
import { getPokemon } from "../utils/getPokemon";

export const GetData = () => {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [prevUrl, setPrevUrl] = useState(null);
    const [nextUrl, setNextUrl] = useState(null);
    const [allPokemon, setAllPokemon] = useState(null);

    useEffect(() => {
        new Promise((resolve) => resolve(getPokemon(url))).then(
            ({ prevUrl, nextUrl, pokemon }) => {
                setPrevUrl(prevUrl);
                setNextUrl(nextUrl);
                setAllPokemon(pokemon);
                // console.log(prevUrl, nextUrl, pokemon);
            }
        );
        // console.log(allPokemon);
    }, [allPokemon == null, url]);

    const prevPage = () => {
        if (prevUrl != null) {
            setUrl(prevUrl);
        }
    };

    const nextPage = () => {
        if (nextUrl != null) {
            setUrl(nextUrl);
        }
    };

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
            <>
                <button onClick={prevPage}>前へ</button>
                <button onClick={nextPage}>次へ</button>
            </>
        </div>
    );
};

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
`;
