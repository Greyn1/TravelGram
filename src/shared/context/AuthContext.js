import { createContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
});

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
        navigate('/');
    },[]);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
        navigate('/auth');
    },[]);

    const value = {isLoggedIn, login, logout};
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}