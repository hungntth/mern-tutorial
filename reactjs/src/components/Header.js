import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import logoApp from "../assets/images/logo192.png";
import { handleLogoutRedux } from "../redux/actions/userAction";

const Header = (props) => {
    const history = useHistory();

    const user = useSelector(state => state.user.account)
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(handleLogoutRedux());
    };
    useEffect(() => {
        if (user && user.auth === false && window.location.pathname !== '/login' && window.location.pathname !== '/register') {
            history.push("/");
            toast.success("Log out succes!")
        }
    }, [user])
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
                        {
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
                                    {user && user.auth === true ? (
                                        <NavDropdown title={user.email}>
                                            <NavDropdown.Item onClick={() => handleLogout()}>
                                                Logout
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    ) : (
                                        <NavDropdown title="Setting">
                                            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                                            <NavDropdown.Item href="/register">
                                                Register
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    )}
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
