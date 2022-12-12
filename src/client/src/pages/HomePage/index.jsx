import React, { useState, useEffect } from "react"
import TableSetup from '../TableSetup';
import './style.css'
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";



export const HomePage = () => {

    const [dataTable, setDataTable] = useState([]);
    let [column, setColumnTable] = useState([
        { heading: 'Produto', value: 'name' },
        { heading: 'Quantidade', value: 'quantity' },
        { heading: 'Preço', value: 'price' }
    ]);
    let [messages, setMessage] = useState("");
    let [typeOfItem, setTypeOfItem] = useState("product")
    let [idCount, setID] = useState(89);
    let [itemName, setItemName] = useState("");
    let [itemCost, setItemCost] = useState(0);
    let [itemQt, setItemQt] = useState(0);
    let [itemTotal_value, setItemTotal_value] = useState(0);
    let [isNewItem, setIsNewItem] = useState(false);
    let [input1, setInput1] = useState("");
    let [input2, setInput2] = useState("");
    let [input3, setInput3] = useState("");

    const userName = JSON.parse(sessionStorage.getItem('user')).name;
    
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
            setDataTable(data)
        });
        
        setTypeOfItem("product");
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
            setDataTable(data)
        });
        setTypeOfItem("stock");
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
            setDataTable(data)
        });
        setTypeOfItem("order");

    }

    function setNewInfo() {
        console.log('setNewInfo');
        setIsNewItem(true)

    }


    function addItem () {
        console.log('addItem');
        console.log('itemName', input1);
        console.log('itemQuantity', input2);
        console.log('itemQuantity', input3);
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };

        if(typeOfItem === "product") {
            idCount = idCount++;
            requestOptions.body = JSON.stringify({ productName: input1, productQty: parseInt(input2), productCost: parseInt(input3), productSku:  Math.floor(Math.random()*idCount)})
            fetch('addProducts/', requestOptions)
            .then(response => {
                console.log('response', response)
            }).then(data => {
                console.log('response', data)
                setIsNewItem(false)
                setProduct()
            });
        } else if(typeOfItem === "stock") {
            requestOptions.body = JSON.stringify({ productName: input1, productQty: parseInt(input2), productCost: parseInt(input3), productId:  Math.floor(Math.random()*idCount) })
            fetch('addStock', requestOptions)
            .then(response => {
                console.log(response)
            }).then(data => {
                console.log(data)
                setIsNewItem(false)
                setStock();
            });

        } else if(typeOfItem === "order") {
            requestOptions.body = JSON.stringify({ totalValue: parseInt(input1), orderCost: parseInt(input2), orderId:  Math.floor(Math.random()*idCount) })

            fetch('addOrders', requestOptions)
            .then(response => {
                console.log(response)
            })
            .then(data => {
                console.log(data)
                setIsNewItem(false)
                setOrder();
            });
        }
        setID(idCount++);

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

    const setItem = (setFunction, event) => {
        setFunction(event.target.value)
        console.log(event.target.value)
    }    





    return (
        <div className="dashboard">
            <div className="userLogged">
                <p>Olá, {userName}</p>
            </div>
            <div className="dashboard-center">
                <div className="chooseButtons">
                    <div className="semiTitle" onClickCapture={setProduct}>Produtos</div>
                    <div className="semiTitle" onClickCapture={setStock}>Estoque</div>
                    <div className="semiTitle" onClickCapture={setOrder}>Pedidos</div>
                </div>
                <div className="table">
                    <TableSetup data={dataTable} column={column} />
                </div>
                <div className="finalData">
                    {isNewItem?                 <div className="newItems">
                        <input type="text" name="newItem" onChange={(e)=>setItem(setInput1, e)} />
                        <input type="text" onChange={(e)=>setItem(setInput2, e)} value={input2}/>
                        <input type="text" onChange={(e)=>setItem(setInput3, e)} value={input3}/>
                    </div> : null}
                    <div className="action-buttons">
                    
                    <button type="button" className="newItem" onClick={setNewInfo} style={{ display: isNewItem ? 'none' : 'block' }}>Novo item</button>
                    <button type="button" className="newItem" style={{ display: isNewItem ? 'block' : 'none' }} onClick={addItem}>Salvar modificações</button>
                    <button type="button" className="deleteItem" onClick={deleteItem}>Excluir</button>
                </div>
                </div>
                


                <div className="messages">
                    {}
                </div>
            </div>
        </div>

    )
}

