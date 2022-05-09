import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { registerApi } from "../api/AuthApi";
import { handleRegisterRedux } from "../redux/actions/userAction";

function Register(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const history = useHistory();
    const account = useSelector(state => state.user.account);
    const isLoading = useSelector(state => state.user.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (account && account.auth === true) {
            history.push("/");
        }
    }, [account])
    const handlRegister = async () => {
        dispatch(handleRegisterRedux(email, password));
    }
    const handleGoBack = () => {
        history.push("/")
    }
    return (
        <>
            <div className="login-container col-12 col-sm-4">
                <div className="title">Log in</div>
                <div className="text">Email</div>
                <input
                    type="email"
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
                <input
                    type="password"
                    placeholder="Retype password..."
                    value={retypePassword}
                    onChange={(event) => setRetypePassword(event.target.value)}
                />
                <button
                    className={
                        email && password && password === retypePassword ? "active" : ""
                    }
                    disabled={
                        email && password && password === retypePassword && !isLoading ? false : true
                    }
                    onClick={() => handlRegister()}
                >
                    {isLoading && <i class="fas fa-cog fa-spin"></i>}
                    Login
                </button>
                <div className="back" onClick={() => handleGoBack()}>
                    <i className="fa-solid fa-angle-left"></i> Go Back
                </div>
            </div>
        </>
    );
}

export default Register;
