import { Row, Col, Button, Card, Container } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import { MyContext } from "../context/MyContext"
import { useNavigate, useParams } from "react-router-dom"

export default () => {
    const navigate = useNavigate();
    const { name } = useParams()

    const [nombre, setNombre] = useState("")
    const [image, setImage] = useState("")
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()

    const getPokemons = async () => {
        const res = await fetch("http://pokeapi.co/api/v2/pokemon/" + name);
        const data = await res.json();
        setNombre(data.name)
        setImage(data.sprites.other.dream_world.front_default)
        setHeight(data.height)
        setWeight(data.weight)

    }

    useEffect(() => {
        getPokemons()
    }, [])


    return (
        <Container>
            <Card style={{ width: '60rem' }} className="mt-5">
                <Card.Body>
                    <Row>
                        <Col className="d-flex justify-content-center my-2"><img src={image}></img></Col>
                        <Col className="my-5">
                            <h1>{nombre}</h1>
                            <ul>
                                <li>Altura: {height} ft</li>
                                <li>Peso: {weight} kg</li>
                            </ul>
                            <Button variant="dark" onClick={() => navigate("/pokemones")}>Volver a Pokemones</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}