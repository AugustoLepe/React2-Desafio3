import { createContext, useEffect, useState } from "react";

export const MyContext = createContext()

const ContextProvider = ({ children }) => {
    const [pokemonList, setPokemonList] = useState([])

    const getPokemons = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0');
        const data = await res.json();
        setPokemonList(data.results)
    }

    useEffect(() => {
        getPokemons();
    }, [])

    const globalState = { pokemonList, setPokemonList }

    return (
        <MyContext.Provider value={globalState}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider;
