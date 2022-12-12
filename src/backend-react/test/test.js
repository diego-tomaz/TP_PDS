const express = require("express");
const app = express();
const server = require('../server/index.js');
const queries = require('../server/queries.js')

// test('User Endpoints', () => {
//     const res = queries.getUsers('/users')
//     expect()
// });

describe("Test for initial Jest setup.", () => {
  describe("practiceTest", () => {
    test("Given 'Hello World!', return 'Hello World!'", () => {
      const received = "Hello World!";
      const expected = "Hello World!";
      expect(practiceTest(argument)).toBe(expected);
    });
  });
});

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

// describe('User Endpoints', () => {

//     it('GET /users should show all users', async () => {
//       const res = await requestWithSupertest.get('/users');
//         expect(res.status).toEqual(200);
//         expect(res.type).toEqual(expect.stringContaining('json'));
//         expect(res.body).toHaveProperty('users')
//     });
  
//   });
