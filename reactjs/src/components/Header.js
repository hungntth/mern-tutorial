import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoApp from "../assets/images/logo192.png";
import { useLocation, NavLink, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Header = (props) => {
    const location = useLocation();
    const history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem("token")
        history.push("/")
        toast.success("Log out success!")
    }
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
                        <Nav className="me-auto" activeKey={location.pathname}>
                            <NavLink className="nav-link" to="/" exact>
                                Home
                            </NavLink>

                            <NavLink className="nav-link" to="/users" exact>
                                Manage Users
                            </NavLink>
                        </Nav>

                        <Nav>
                            <NavDropdown title="Setting" className="" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;
