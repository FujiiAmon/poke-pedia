import { getPokemon } from "../utils/getPokemon";

export const PageButton = () => {
    return (
        <>
            <button onClick={prevPage}>前へ</button>
            <button onClick={nextPage}>次へ</button>
        </>
    );
};

const prevPage = () => {};

const nextPage = () => {};
