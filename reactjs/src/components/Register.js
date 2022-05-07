import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { registerApi } from "../api/AuthApi";

function Register(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            history.push("/")
        }
    }, [])
    const handlRegister = async () => {
        if (!email || !password || !retypePassword) {
            toast.error('Email/Password/RetypePassword wrong!');
            return;
        }
        setLoading(true);
        let res = await registerApi(email, password);
        if (res && res.token) {

            toast.success("Register succeed!");
            history.push("/")
        } else {
            toast.error(res.data);
        }
        setLoading(false);
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
                <input
                    type="password"
                    placeholder="Retype password..."
                    value={retypePassword}
                    onChange={(event) => setRetypePassword(event.target.value)}
                />
                <button
                    className={
                        email && password && password === retypePassword && !loading ? "active" : ""
                    }
                    disabled={
                        email && password && password === retypePassword && !loading ? false : true
                    }
                    onClick={() => handlRegister()}
                >
                    {loading && <i class="fas fa-cog fa-spin"></i>}
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
