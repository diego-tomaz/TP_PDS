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

module.exports = {
    getUsers,
    getUserById
}