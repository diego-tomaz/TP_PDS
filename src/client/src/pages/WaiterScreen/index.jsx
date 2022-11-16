import React, { useState, useEffect } from "react"


export const WaiterScreen = () => {
    const [user, setUser] = useState("")

    return (
        <div className="fundo">
            <div className="actions">
                    <button type="submit">Enviar Pedido</button>
                    <button type="button">Gerenciar pedidos</button>
                </div>
        </div>

    )
}