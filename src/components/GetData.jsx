import { useEffect, useState } from "react";

export const GetData = () => {
    const url = "https://pokeapi.co/api/v2/pokemon";

    const [load, setLoad] = useState(true);
    const [allData, setAllData] = useState(null);
    const [data, setdata] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let allData = await getAllData(url);
            loadData(allData);
        };
        setLoad(false);
        setAllData(fetchData());
    }, []);

    //   loadData(allData);

    return <div>{load ? <h1>loading...</h1> : <h1>Data:</h1>}</div>;
};

const getAllData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data.results))
            .catch((error) => reject(error));
    });
};

const getData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                resolve(data.results);
            })
            .catch((error) => reject(error));
    });
};

const loadData = (allData) => {
    let loadData = Promise.all(
        allData.map((value) => {
            let dataRecord = getData(value.url);
            return dataRecord;
        })
    );
};
