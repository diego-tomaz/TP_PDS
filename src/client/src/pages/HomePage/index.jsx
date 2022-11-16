import React, { useState, useEffect } from "react"
import TableSetup from '../TableSetup';
import './style.css'


export const HomePage = () => {
    const [dataTable, setDataTable] = useState([]);
    let [column, setColumnTable] = useState([
        { heading: 'Produto', value: 'name' },
        { heading: 'Quantidade', value: 'quantity' },
        { heading: 'Preço', value: 'price' }
    ]);
    let [messages, setMessage] = useState("");


    const setProduct = (event) => {
        setDataTable([]);
        console.log('product')
        setColumnTable([
            { heading: 'Produto', value: 'name' },
            { heading: 'Quantidade', value: 'quantity' },
            { heading: 'Preço', value: 'price' }
        ])

        fetch('/products')
        .then(response => response.json())
        .then(data => {
            console.log('setStock', data)

            setDataTable(data)
        });

    }


    const setStock = (event) => {
        setDataTable([]);
        setColumnTable([
            { heading: 'Nome do item', value: 'name' },
            { heading: 'Custo', value: 'cost' },
            { heading: 'Quantidade', value: 'quantity' }
        ])

        fetch('/stock')
        .then(response => response.json())
        .then(data => {
            console.log('setStock', data)

            setDataTable(data)
        });
    }

    const setOrder = (event) => {
        setDataTable([]);

        setColumnTable([
            { heading: 'Id', value: 'id' },
            { heading: 'Custo', value: 'cost' },
            { heading: 'Valor Recebido', value: 'total_value' }
        ])
        console.log('setOrder')

        fetch('/order_requested')
        .then(response => response.json())
        .then(data => {
            console.log('setStock', data)

            setDataTable(data)
        });
    }



    function addItem () {
        console.log('addItem')
    }

    function deleteItem () {
        console.log('deleteItem')
    }

    useEffect(() => {
        fetch("/products").then(
            res => res.json()
        ).then(
            data => {
                setDataTable(data)
                console.log(data)
            }
        )
    }, []);





    return (
        <div className="dashboard">
            <div className="dashboard-center">
                <div className="chooseButtons">
                    <div className="semiTitle" onClickCapture={setProduct}>Produtos</div>
                    <div className="semiTitle" onClickCapture={setStock}>Estoque</div>
                    <div className="semiTitle" onClickCapture={setOrder}>Pedidos</div>
                </div>
                <div className="table">
                    <TableSetup data={dataTable} column={column} />
                </div>
                <div className="action-buttons">
                    <button type="button" className="newItem" onClick={addItem}>Novo</button>
                    <button type="button" className="deleteItem" onClick={deleteItem}>Excluir</button>
                </div>
                <div className="messages">
                    {}
                </div>
            </div>
        </div>

    )
}

