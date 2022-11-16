import React, { useState, useEffect } from "react"
import SimpleTableComponent from "reactjs-simple-table";

export const HomePage = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")


    useEffect(() => {
        const userFromSession = JSON.parse(sessionStorage.getItem('user'));
        setUser(userFromSession);
        console.log(userFromSession)
        console.log(user)
    });



    return (
        <div>{user.id}</div>
    )
}