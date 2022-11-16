const { request, response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'clarice_p',
    host: 'localhost',
    database: 'postgres',
    password: 'adminfoodCLA',
    port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM restaurant_user ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const email = parseInt(request.params.email)

    pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getStockProducts = (request, response) => {
    pool.query('SELECT * FROM stock ORDER BY id ASC ', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getProducts = (request, response) => {
    pool.query('SELECT * FROM product ORDER BY sku ASC ', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getOrders = (request, response) => {
    pool.query('SELECT * FROM order ORDER BY id ASC ', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const addProduct = (request, response) => {
    const {productName, productQty, productSku} = request.body
    pool.query('INSERT INTO product (name, quantity, sku) VALUES ($1, $2, $3)', [productName, productQty, productSku], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Product added with id: ${results.rows[0].id}`)
    })
}

const updateProduct = (request, response) => {
    const {productName, productQty} = request.body
    const sku = parseInt(request.params.sku)
    pool.query('UPDATE product SET name = $1, quantity = $2, sku = $3', [productName, productQty, sku], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Product updated with id: ${results.rows[0].id}`)
    })
}

const addStockProduct = (request, response) => {
    const {productName, productCost, productQty, productId} = request.body
    pool.query('INSERT INTO stock (name, cost, quantity, id) VALUES ($1, $2, $3, $4)', [productName, productCost, productQty, productId], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Stock product added with id: ${results.rows[0].id}`)
    })
}

const updateStockProduct = (request, response) => {
    const {productName, productCost, productQty} = request.body
    const id = parseInt(request.params.id)
    pool.query('UPDATE stock SET name = $1, cost = $2, quantity = $3, id = $4', [productName, productCost, productQty, id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Stock product updated with id: ${results.rows[0].id}`)
    })
}

const addOrder = (request, response) => {
    const {orderId, orderCost, totalValue} = request.body
    pool.query('INSERT INTO order (id, cost, total_value) VALUES ($1, $2, $3)', [orderId, orderCost, totalValue], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Order product added with id: ${results.rows[0].id}`)
    })
}

const updateOrder = (request, response) => {
    const {orderCost, totalValue} = request.body
    const id = parseInt(request.params.id)
    pool.query('UPDATE stock SET id = $1, cost = $2, total_value = $3', [id, orderCost, totalValue], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Order updated with id: ${results.rows[0].id}`)
    })
}

const deleteStockProduct = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE from stock WHERE id = $1', [id], (error) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Stock product deleted with ID: ${id}`)
    })
}

const deleteProduct = (request, response) => {
    const sku = parseInt(request.params.sku)

    pool.query('DELETE from product WHERE sku = $1', [sku], (error) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Product deleted with ID: ${sku}`)
    })
}

const deleteOrder = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE from order WHERE id = $1', [id], (error) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Order deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserById,
    getStockProducts,
    getProducts,
    getOrders,
    addProduct,
    updateProduct,
    addStockProduct,
    updateStockProduct,
    addOrder,
    updateOrder,
    deleteStockProduct,
    deleteProduct,
    deleteOrder
}