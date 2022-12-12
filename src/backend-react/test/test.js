const express = require("express");
const app = express();
const server = require('../server/index.js');
const queries = require('../server/queries.js')

test('Hello from server', () => {
  const res = app.get('/api');
  //expect(res.status).toEqual(200);
});

test('Users endpoint', () => {
  const res = app.get('/users');
  const req = queries.getUsers();
  //expect(res.status).toEqual(200);
});


test('Products endpoint', () => {
  const res = app.get('/products');
  const req = queries.getProducts();
  //expect(res.status).toEqual(200);
});


test('Orders endpoint', () => {
  const res = app.get('/order_requested');
  const req = queries.getOrders();
  //expect(res.status).toEqual(200);
});


test('Stock endpoint', () => {
  const res = app.get('/stock');
  const req = queries.getStockProducts();
  //expect(res.status).toEqual(200);
});

// describe('User Endpoints', () => {
//     it('GET /users should show all users', async () => {
//       const res = await requestWithSupertest.get('/users');
//         expect(res.status).toEqual(200);
//         expect(res.type).toEqual(expect.stringContaining('json'));
//         expect(res.body).toHaveProperty('users')
//     });
  
//   });
