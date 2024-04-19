import express from "express";
import { handleGetUsers } from "./controller/users.js";

/**
 * create app express
 */

const app = express();

//call method get
app.get("/users", handleGetUsers);

//call method post

app.post;

/**
 *
 * listen port
 */

//callback de bat loi, thanh cong chay vao callback
app.listen(3001, "localhost", () => {
  console.log("run success");
});
