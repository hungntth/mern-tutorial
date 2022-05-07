import React, { useState } from "react";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                <button className={email && password ? "active" : ""}
                    disabled={email && password ? false : true}
                >Login</button>
                <div className="back">
                    <i className="fa-solid fa-angle-left"></i> Go back
                </div>
            </div>
        </>
    );
}

export default Login;
