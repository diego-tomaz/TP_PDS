import React, { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../contexts/auth"

export const LoginPage = () => {
    const {authenticated, login} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState(null);


    const onSubmitHandler = (event) => {
        event.preventDefault();
        login(email, password, errorMessage)
    }

    const inputChangeHandler = (setFunction, event) => {
        setFunction(event.target.value)
        console.log(event.target.value)
    }

    return(
        <div id="login">
            <p>{String(authenticated)}</p>
            <form onSubmit={onSubmitHandler} className="form">
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <div><br/></div>
                    <input id="email" name="email" 
                    value={email} onChange={(e)=>inputChangeHandler(setEmail, e)} type="text"/>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <div><br/></div>
                    <input id="password" alue={password}  name="password" onChange={(e)=>inputChangeHandler(setPassword, e)} type="password"/>
                </div>
                <div><br/></div>
                <div className="actions">
                    <button type="submit"> Continuar </button>
                </div>
            </form>
        </div>
    )
}