import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import TableUser from '../components/TableUser';

PrivateRoute.propTypes = {

};

function PrivateRoute(props) {
    const user = useSelector(state => state.user.account)
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