import React, { useState, useEffect } from "react"
import SimpleTableComponent from "reactjs-simple-table";

export const HomePage = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div>{user.id}</div>
    )
}