import { useEffect, useState } from "react";

export const GetData = () => {
    const url = "https://pokeapi.co/api/v2/pokemon";

    const [load, setLoad] = useState(true);
    const [allPokemon, setAllPokemon] = useState(null);

    useEffect(() => {
        (async () => {
            let res = await getData(url);
            // console.log(res);
            setAllPokemon(res);
        })();
        console.log(allPokemon);
        // let urls = allPokemon.map((val) => {
        //     return val.url;
        // });
        // console.log(urls);
        // Promise.all(
        //     urls.map((url) => fetch(url).then((res) => res.json()))
        // ).foreach((res) => console.log(res));

        setLoad(false);
        //loadPokemon(allPokemon);
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
            .then((res) => res.results)
            .then((data) => resolve(data));
    });
};
