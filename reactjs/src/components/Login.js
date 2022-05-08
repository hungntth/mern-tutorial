import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loginApi } from "../api/AuthApi";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { loginContext } = useContext(UserContext);
    // useEffect(() => {
    //     let token = localStorage.getItem("token");
    //     if (token) {
    //         history.push("/")
    //     }
    // }, [])
    const handleLogion = async () => {
        if (!email || !password) {
            toast.error("Email/Password wrong!");
            return;
        }
        setLoading(true);
        let res = await loginApi(email, password);
        if (res && res.token) {
            loginContext(email, res.token);
            toast.success("Login succeed!");
            history.push("/");
        } else {
            toast.error(res.data);
        }
        setLoading(false);
    };
    const handleGoBack = () => {
        history.push("/")
    }

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
                    className={email && password && !loading ? "active" : ""}
                    disabled={email && password && !loading ? false : true}
                    onClick={() => handleLogion()}
                >
                    {loading && <i className="fas fa-cog fa-spin"></i>}
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
