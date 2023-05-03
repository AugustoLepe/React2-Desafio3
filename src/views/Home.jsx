import { Container } from "react-bootstrap";
import pikachu from "../img/pikachu.png"

export default () => {
    return (
        <Container className="text-center">
            <h1 className="pt-5">Bienvenido <strong>Maestro Pokemon</strong></h1>
            <img src={pikachu} alt="pikachu" width="400px" />
        </Container>
    );
};