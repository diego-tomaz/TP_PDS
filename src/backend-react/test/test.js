const express = require("express");
const app = express();
const server = require('../server/index.js');

test('Hello from server', () => {
  const res = app.get('/api');
  //expect(res.status).toEqual(200);
});

test('Users endpoint', () => {
  const res = app.get('/users');
  //expect(res.status).toEqual(200);
});

test('Products endpoint', () => {
  const res = app.get('/products');
  //expect(res.status).toEqual(200);
});


test('Orders endpoint', () => {
  const res = app.get('/order_requested');
  //expect(res.status).toEqual(200);
});


test('Stock endpoint', () => {
  const res = app.get('/stock');
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
