import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const nNavbar = () => {
    return (
        <Navbar bg="danger" variant="dark">
            <Container className="justify-content-between">
                <div>
                    <Link to="/" className="text-white ms-3 text-decoration-none">🏡Home</Link>
                    <Link to="/contacto" className="text-white ms-3 text-decoration-none">📒Contacto</Link>
                </div>
                <Navbar.Brand>Happy Cake🍰</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default nNavbar;
