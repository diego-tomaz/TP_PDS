import React, { useState, useEffect } from "react"

export const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const onSubmitHandler = (event) => {
        event.preventDefault();
        fetch("/users").then(
            res => res.json()
            ).then(
                data => {
                    const user = data.find(item => item && item.email === email)
                    console.log(user)
            }
        )

    }

    const inputChangeHandler = (setFunction, event) => {
        setFunction(event.target.value)
        console.log(event.target.value)
    }

    return(
        <div id="login">
            <form onSubmit={onSubmitHandler} className="form">
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" onChange={(e)=>inputChangeHandler(setEmail, e)} type="text"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" onChange={(e)=>inputChangeHandler(setPassword, e)} type="password"/>
                </div>
                <div className="actions">
                    <button type="submit"/>
                </div>
            </form>
        </div>
    )
}