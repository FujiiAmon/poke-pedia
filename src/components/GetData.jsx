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
    }, [allPokemon == null]);

    const prevPage = () => {
        if (prevUrl != null) {
            setUrl(prevUrl);
            setAllPokemon(null);
        }
    };

    const nextPage = () => {
        if (nextUrl != null) {
            setUrl(nextUrl);
            setAllPokemon(null);
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
                <SBtn onClick={prevPage}>前へ</SBtn>
                <SBtn onClick={nextPage}>次へ</SBtn>
            </>
        </div>
    );
};

const CardContainer = styled.div`
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    place-content: center;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
`;

const SBtn = styled.button`
    background-color: orange;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    box-shadow: 5px 5px 5px #888888;
    &:hover {
        background-color: #ff6600;
        transform: scale(1.1);
        box-shadow: none;
    }
`;
