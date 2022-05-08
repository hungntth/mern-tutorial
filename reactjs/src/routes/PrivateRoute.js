import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import TableUser from '../components/TableUser';
import { UserContext } from '../context/UserContext';
import Alert from 'react-bootstrap/Alert'

PrivateRoute.propTypes = {

};

function PrivateRoute(props) {
    const { user } = useContext(UserContext);
    if (user && !user.auth) {
        return <>
            <Alert variant="danger">
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    You have not registered an account yet!
                </p>
            </Alert>
        </>
    }
    return (
        <>
            <Route path={props.path} component={TableUser} exact />
        </>
    );
}

export default PrivateRoute;