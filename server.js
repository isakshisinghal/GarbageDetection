import express from 'express'

import cors from 'cors'
import connectDB from './config/db'
import passport, { initialize } from 'passport'
import { urlencoded, json } from 'body-parser'
import routes from './routes/index'

connectDB()

const app = express()



app.use(cors())
app.use(urlencoded({ extended: false }))
app.use(json())
app.use(routes)
app.use(initialize())
require('./config/passport')(passport)


const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)) 