import React, { useState } from 'react';


function Register(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
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
                <button className={email && password && password === retypePassword ? "active" : ""}
                    disabled={email && password && password === retypePassword ? false : true}
                >Login</button>
                <div className="back">
                    <i className="fa-solid fa-angle-left"></i> Go back
                </div>
            </div>
        </>
    );
}

export default Register;