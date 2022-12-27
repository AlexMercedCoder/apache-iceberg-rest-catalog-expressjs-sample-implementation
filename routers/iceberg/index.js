// this router handles routing from "/iceberg"

import express from "express"
import v1Router from "./v1/index.js"

const icebergRouter = express.Router()

// test route "/iceberg/test"
icebergRouter.get("/test", (req, res) => res.send("server working"))

// register v1Router to "/iceberg/v1"
icebergRouter.use("/v1", v1Router)

export default icebergRouter