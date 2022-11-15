import React, { useState, useEffect, createContext } from "react"
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] =  useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const login = (email, password) => {
        console.log("login", {email, password});
        fetch("/users").then(
            res => res.json()
            ).then(
                data => {
                    const user = data.find(item => item && item.email === email)
                    if(user.password === password) {
                        setUser({id: user.id, email})
                        navigate("/")
                        sessionStorage.setItem('user', JSON.stringify(user));
                    } else {
                        setErrorMessage("Senha incorreta")
                    }
            }
        )
    };

    const logout = (email, password) => {
        setUser(null);
        navigate("/login")
    };

    return (
        <AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}