import express from "express"
import icebergRouter from "./iceberg/index.js"

const rootRouter = express.Router()

// test route "/test"
rootRouter.get("/test", (req, res) => res.send("server working"))

// register icebergRouter for "/iceberg routes"
rootRouter.use("/iceberg", icebergRouter)

export default rootRouter