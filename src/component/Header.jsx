import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom"
import { CartContext } from "./App";

function Header({setModalShow}) {
   
   const {cart }= useContext(CartContext)
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className="bg-danger light" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="./assets/img/pizza-logo.png" alt="pizza" className="logo" />
                        Pizza App
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/main" className="nav-link">Main</NavLink>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                        </Nav>
                        <Nav>
                            <Button onClick={() => setModalShow(true)} className="btn btn-light position-relative">
                                <BsCart4 />
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                                    {cart.length}
                                </span>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            
        </header>
    )
}

export default Header