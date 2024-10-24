import { useEffect, useState } from "react";
import { Card } from "./Card";

export const GetData = () => {
    const url = "https://pokeapi.co/api/v2/pokemon";

    const [load, setLoad] = useState(true);
    const [allPokemon, setAllPokemon] = useState(null);
    // const [data, setdata] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let _allPokemon = await getAllPokemon(url);
            setAllPokemon(_allPokemon);
        };
        console.log(allPokemon);
        setLoad(false);
        // loadPokemon(allPokemon);
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

// const getData = (url) => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then((res) => res.json())
//             .then((data) => resolve(data.results))
//             .catch((error) => reject(error));
//     });
// };

const loadPokemon = async (allPokemon) => {
    let loadData = await Promise.all(
        allPokemon.map((value) => {
            console.log(value.url);
            // let dataRecord = getData(value.url);
            // return dataRecord;
        })
    );
    console.log(loadData);
};
