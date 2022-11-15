import React, { useState, useEffect } from "react"

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const onSubmitHandler = (event) => {
        event.preventDefault();
        fetch("/api").then(
            res => res.json()
            ).then(
                data => {
                    console.log('teste')
                console.log(data)
            }
        )

    }

    const inputChangeHandler = (setFunction, event) => {
        setFunction(event.target.value)
        console.log(event.target.value)
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <div><label htmlFor="email">Email</label></div>
            <div><input id="email" onChange={(e)=>inputChangeHandler(setEmail, e)} type="text"/></div>
            <div><label htmlFor="password">Password</label></div>
            <div><input id="password" onChange={(e)=>inputChangeHandler(setPassword, e)} type="password"/></div>
            <input type="submit"/>
        </form>
    )
}