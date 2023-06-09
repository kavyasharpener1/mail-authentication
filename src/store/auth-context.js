import React, { useState } from 'react';
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    Login: (token) => {},
    Logout: () => {},
});
export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null)

    const UserIsLoggedIn = !!token;
    const loginHandler = (token) => {
setToken(token);
    };

    const logoutHandler = () => {
        setToken(null);
    };

    const contextValue = {
        token: token,
        isLoggedIn: UserIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };
    return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
        </AuthContext.Provider>
    );
};
export default AuthContext;