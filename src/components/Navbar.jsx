import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

import "../assets/css/pokeapi.css";
import logo2 from "../img/logo2.png";

const nNavbar = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");

    return (
        <Navbar bg="dark" variant="dark">
            <Container className="justify-content-between">
                <Navbar.Brand> <img src={logo2} width="50px" alt="pokebola" /> </Navbar.Brand>
                <div>
                    <NavLink to="/" className={setActiveClass}>Home</NavLink>
                    <NavLink to="/pokemones" className={setActiveClass}>Pokemones</NavLink>
                </div>
            </Container>
        </Navbar>
    )
}

export default nNavbar;
