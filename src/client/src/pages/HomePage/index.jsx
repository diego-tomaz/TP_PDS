import React, { useState, useEffect } from "react"

export const HomePage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const onSubmitHandler = (event) => {
        event.preventDefault();
        // fetch("/users").then(
        //     res => res.json()
        //     ).then(
        //         data => {
        //             const user = data.find(item => item && item.email === email)
        //             console.log(user)
        //     }
        // )

    }

    return(
        <div id="login">
            <form onSubmit={onSubmitHandler} className="form">
                <div className="field">
Minski
                    <button type="submit"/>
                </div>
            </form>
        </div>
    )
}