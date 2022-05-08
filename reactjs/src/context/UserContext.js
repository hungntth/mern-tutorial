// @function  UserContext
import React from "react";

const UserContext = React.createContext({ email: '', auth: false });

// @function  UserProvider
// Create function to provide UserContext
const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState({ auth: false });

    const loginContext = (email, token) => {
        setUser((user) => ({
            user: email,
            auth: true,
        }));
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser((user) => ({
            email: '',
            auth: false,
        }));
    };

    return (
        <UserContext.Provider value={{ user, loginContext, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
