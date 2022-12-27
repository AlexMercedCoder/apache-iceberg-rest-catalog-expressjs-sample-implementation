// this router handles routing from "/iceberg"

import express from "express"

const icebergRouter = express.Router()

// test route "/iceberg/test"
icebergRouter.get("/test", (req, res) => res.send("server working"))

export default icebergRouter