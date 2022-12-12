import React, { useState, useEffect, useContext } from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { HomePage } from "./pages/HomePage"
import { WaiterScreen } from "./pages/WaiterScreen"
import { AuthProvider, AuthContext } from "./contexts/auth"

const AppRoutes = () => {
    const Private = ({ children }) => {
        console.log(children)
        const { authenticated, user } = useContext(AuthContext);
        console.log(useContext(AuthContext))
        if (!authenticated) {
            return <Navigate to="/login" />
        } else if(user.role === 'Atendente') {
            return <Navigate to="/WaiterScreen" />
        }

        return children;
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login/" element={<LoginPage />} />
                    <Route exact path="/" element={
                        <Private>
                            <HomePage />
                        </Private>} 
                    />
                    <Route exact path="/WaiterScreen/" element={<WaiterScreen />} />
                </Routes>
            </AuthProvider>

        </Router>
    )
}

export default AppRoutes