import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { handleLogionRedux } from "../redux/actions/userAction";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.isLoading);
    const account = useSelector(state => state.user.account);

    useEffect(() => {
        if (account && account.auth === true) {
            history.push("/");
        }
    }, [account])

    const handleLogion = async () => {
        dispatch(handleLogionRedux(email, password));
    };
    const handleGoBack = () => {
        history.push("/");
    };

    return (
        <>
            <div className="login-container col-12 col-sm-4">
                <div className="title">Log in</div>
                <div className="text">Email</div>
                <input
                    type="text"
                    placeholder="Email..."
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password..."
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button
                    className={email && password ? "active" : ""}
                    disabled={email && password && !isLoading ? false : true}
                    onClick={() => handleLogion()}
                >
                    {isLoading && <i className="fas fa-cog fa-spin"></i>}
                    Login
                </button>
                <div className="back" onClick={() => handleGoBack()}>
                    <i className="fa-solid fa-angle-left"></i> Go Back
                </div>
            </div>
        </>
    );
}

export default Login;
