// this router handles routing from "/iceberg/v1"

import express from "express"

const v1Router = express.Router()

// test route "/iceberg/v1/test"
v1Router.get("/test", (req, res) => res.send("server working"))

export default v1Router