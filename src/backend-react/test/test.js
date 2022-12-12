const express = require("express");
const app = express();
const server = require('../server/index.js');
const queries = require('../server/queries.js')
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

// test('User Endpoints', () => {
//     const res = queries.getUsers('/users')
//     expect()
// });

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

test('Hello world', () => {
  const res = await requestWithSupertest.get('/api');
  expect(res.status).toEqual(200);
});


// describe('User Endpoints', () => {

//     it('GET /users should show all users', async () => {
//       const res = await requestWithSupertest.get('/users');
//         expect(res.status).toEqual(200);
//         expect(res.type).toEqual(expect.stringContaining('json'));
//         expect(res.body).toHaveProperty('users')
//     });
  
//   });
