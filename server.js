import dotenv from "dotenv"
import express from "express"
import middleware from "./middleware"

// bring in .env variables
dotenv.config()

// create express app application
const app = express()

// Register Middleware and Routers
middleware(app)

//server listener
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Listening on port ${4000}`))