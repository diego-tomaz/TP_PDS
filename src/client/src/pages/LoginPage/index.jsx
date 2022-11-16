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
            <div className="box">
                <img  src={require('./logo.png')} alt="" />
            </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <div><br/></div>
                    <input id="email" name="email" onChange={(e)=>inputChangeHandler(setEmail, e)} type="text"/>
                </div>
                <div>
                <div><br/></div>
                    <label htmlFor="password">Senha</label>
                    <div><br/></div>
                    <input id="password" name="password" onChange={(e)=>inputChangeHandler(setPassword, e)} type="password"/>
                </div>
                <div><br/></div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    )
}