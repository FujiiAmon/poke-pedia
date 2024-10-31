const getData = async (url) => {
    return new Promise((resolve) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => resolve(data));
    });
};

export const getPokemon = async (url) => {
    let res = await getData(url);
    // console.log(res);
    let prevUrl = res.previous;
    let nextUrl = res.next;
    res = res.results;

    let urls = res.map((val) => {
        return val.url;
    });
    // console.log(urls);

    let allData = await Promise.all(
        urls.map((url) => {
            return getData(url);
        })
    );
    // console.log(pokemon);

    let pokemon = allData.map((val) => {
        return { name: val.name, image: val.sprites.front_default };
    });
    // console.log(data);

    return { pokemon, prevUrl, nextUrl };
};
