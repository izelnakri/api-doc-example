import { readFileSync } from "fs";
import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const app = express();

// const swaggerDocs = swaggerJsDoc({
//   swaggerDefinition: {
//     info: {
//       title: "Library API",
//       version: "1.0.0",
//     },
//   },
//   apis: ["app.ts"],
// });

// console.log(swaggerDocs);

const swaggerDocs = JSON.parse(
  readFileSync(`${process.cwd()}/docs/advanced-spot-example.json`).toString()
);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /:
 *   get:
 *     description: Returns the homepage
 *     responses:
 *       200:
 *         description: hello world
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * @swagger
 * definitions:
 *   Login:
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *       path:
 *         type: string
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and login
 */

/**
 * @swagger
 * tags:
 *   - name: Login
 *     description: Login
 *   - name: Accounts
 *     description: Accounts
 */

/**
 * @swagger
 * /login:
 *   post:
 *     description: Login to the application
 *     tags: [Users, Login]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Login'
 */
app.post("/login", (req, res) => {
  res.json(req.body);
});

/**
 * @swagger
 * /users:
 *   get:
 *     description: Returns users
 *     tags:
 *      - Users
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: users
 */
app.get("/users", (req, res) => {
  res.json({
    username: "jsmith",
  });
});

/**
 * @swagger
 * /users:
 *   post:
 *     description: Returns users
 *     tags: [Users]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: users
 */
app.post("/users", (req, res) => {
  res.json(req.body);
});

app.listen(5000, () => console.log("server listening on 5000"));
