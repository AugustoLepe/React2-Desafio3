import { Row, Col, Button, Card, Container } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [pokemon, setPokemon] = useState()

    const getPersonajes = async () => {
        const res = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setPokemon(data)
    }

    useEffect(() => {
        getPersonajes()
    }, [id])


    return (
        <Container className="d-flex justify-content-center">
            <Card style={{ width: '60rem' }} className="mt-5">
                <Card.Body>
                    <Row>
                        <Col className="d-flex justify-content-center my-2"><img src={pokemon?.sprites.other.dream_world.front_default} alt="pokemon"></img></Col>
                        <Col className="my-5">
                            <h1>{pokemon?.name.toUpperCase()}</h1>
                            <ul>
                                <li>Element: {pokemon?.types[0].type.name}</li>
                                <li>Height: {pokemon?.height} ft</li>
                                <li>Weight: {pokemon?.weight} kg</li>
                                <li>HP: {pokemon?.stats[0].base_stat}</li>
                                <li>Attack: {pokemon?.stats[1].base_stat}</li>
                                <li>Defense: {pokemon?.stats[2].base_stat}</li>
                                <li>Special Attack: {pokemon?.stats[3].base_stat}</li>
                                <li>Special Defense: {pokemon?.stats[4].base_stat}</li>
                                <li>Speed: {pokemon?.stats[5].base_stat}</li>
                            </ul>
                            <Button variant="dark" onClick={() => navigate("/pokemones")}>Volver a Pokemones</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}