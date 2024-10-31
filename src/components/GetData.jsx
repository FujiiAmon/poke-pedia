import { useEffect, useState } from "react";

export const GetData = () => {
    const url = "https://pokeapi.co/api/v2/pokemon";

    const [load, setLoad] = useState(true);
    const [allPokemon, setAllPokemon] = useState(null);

    useEffect(() => {
        (async () => {
            let res = await getData(url);
            res = res.results;
            // console.log(res);

            let urls = res.map((val) => {
                return val.url;
            });
            // console.log(urls);

            let pokemon = await Promise.all(
                urls.map((url) => {
                    return getData(url);
                })
            );
            // console.log(pokemon);

            let data = pokemon.map((val) => {
                return { name: val.name, image: val.sprites.front_default };
            });
            // console.log(data);
        })();
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

const getData = async (url) => {
    return new Promise((resolve) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data));
    });
};
