import { useEffect, useState } from "react";
import { Card } from "./Card";

export const GetData = () => {
    const url = "https://pokeapi.co/api/v2/pokemon";

    const [load, setLoad] = useState(true);
    const [allPokemon, setAllPokemon] = useState(null);
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchAllData = async () => {
            let _allPokemon = await getAllPokemon(url);
            setAllPokemon(_allPokemon);
        };
        fetchAllData();
        // console.log(allPokemon);
        const fetchData = async () => {
            let _pokemon = await Promise.all(
                allPokemon.map((value) => {
                    getPokemon(value.url);
                })
            );
            setPokemon(_pokemon);
        };
        fetchData();
        console.log(pokemon);
        setLoad(false);
    }, []);

    return (
        <div>
            {load ? (
                <h1>loading...</h1>
            ) : (
                <h1>{/* <Card pokemon={pokemon} /> */}</h1>
            )}
        </div>
    );
};

const getAllPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data.results))
            .catch((error) => reject(error));
    });
};

const getPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });
};
