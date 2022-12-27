import cors from "cors"
import morgan from "morgan"
import express from "express"
import corsOptions from "./cors"
import rootRouter from "../routers"

const middleware = (app) => {
    // allow all if not in production, use cors configurations if production
    app.use(process.env.NODE_ENV === "production" ? cors(corsOptions) : cors())
    // logging
    app.use(morgan("dev"))
    // parse JSON request bodies into req.body
    app.use(express.json())
    // register the rootrouter
    app.use(rootRouter)
}

export default middleware