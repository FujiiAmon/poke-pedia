import { useEffect, useState } from "react";

export const GetData = () => {
    const url = "https://pokeapi.co/api/v2/pokemon";

    const [load, setLoad] = useState(true);
    const [allPokemon, setAllPokemon] = useState(null);
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((val) => val.json())
            .then((val) => setAllPokemon(val.results));
        console.log(allPokemon);
    }, []);

    return (
        <div>
            {load ? (
                <h1>loading...</h1>
            ) : (
                <h1>Data</h1>
                // <Card name={pokemon.name} sprites={pokemon.sprites} />
            )}
        </div>
    );
};

const getAllPokemon = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data))
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
