import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoApp from "../assets/images/logo192.png";
import { useLocation, NavLink, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const Header = (props) => {
    const location = useLocation();
    const history = useHistory();
    const { user, logout } = useContext(UserContext);

    const handleLogout = () => {
        logout();
        history.push("/");
        toast.success("Log out success!");
    };
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logoApp}
                            width="30"
                            height="30"
                            className="d-inline-block align-top App-logo mx-2"
                            alt="React BootStrap logo"
                        />
                        <span>React-Bootstrap</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {(user && user.auth || window.location.pathname === '/') &&
                            <>
                                <Nav className="me-auto">
                                    <NavLink className="nav-link" to="/" exact>
                                        Home
                                    </NavLink>

                                    <NavLink className="nav-link" to="/users" exact>
                                        Manage Users
                                    </NavLink>
                                </Nav>

                                <Nav>
                                    <NavDropdown title="Setting" >
                                        {user && user.auth === true

                                            ?
                                            <NavDropdown.Item onClick={() => handleLogout()}>
                                                Logout
                                            </NavDropdown.Item>
                                            :

                                            <>
                                                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                                                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                                            </>
                                        }
                                    </NavDropdown>
                                </Nav>
                            </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;
