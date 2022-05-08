import React from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

NotFound.propTypes = {};

function NotFound(props) {
    return (
        <Container>
            <div className="row not-found-content">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>

                        <div class="error-actions">
                            <NavLink class="btn btn-primary btn-lg" to="/">
                                <span className="glyphicon glyphicon-home"></span>
                                Take Me Home{" "}
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
}

export default NotFound;
