import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

export default () => {
    const { pokemonList, setPokemonList } = useContext(MyContext)
    const navigate = useNavigate();

    const goToPokemon = (id) => {
        navigate(`/personaje/${id}`)
    }

    const handleSelect = (e) => {
        goToPokemon(e.target.value)
    }


    return (
        <Container className="pt-5">
            <h1 className="text-center">Selecciona tu Pokemon</h1>

            <select onChange={handleSelect} class="form-select" aria-label="Default select example">
                <option selected>Seleccionar...</option>
                {pokemonList ? pokemonList.map(pokemon => <option value={pokemon.id}>{pokemon.name}</option>) : "loading"}
            </select>
        </Container>
    );
};