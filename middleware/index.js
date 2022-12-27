import cors from "cors"
import morgan from "morgan"
import express from "express"
import corsOptions from "./cors.js"
import rootRouter from "../routers/index.js"
import catalog from "./catalog.js"

const middleware = (app) => {
    // allow all if not in production, use cors configurations if production
    app.use(process.env.NODE_ENV === "production" ? cors(corsOptions) : cors())
    // logging
    app.use(morgan("dev"))
    // parse JSON request bodies into req.body
    app.use(express.json())
    // parse url encoded bodies
    app.use(express.urlencoded({extended: true}))
    // add catalog to req.catalog
    app.use((req, res, next) => {
        req.catalog = catalog
        next()
    })
    // register the rootrouter
    app.use(rootRouter)
}

export default middleware