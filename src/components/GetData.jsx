import { useEffect, useState } from "react";

export const GetData = () => {
  const url = "https://pokeapi.co/api/v2/pokemon";

  const [load, setLoad] = useState(true);
  const [res, setRes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let res = await getAllData(url);
      console.log(res);
    };
    setLoad(false);
    setRes(fetchData());
  }, []);
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
