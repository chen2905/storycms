const http = require('http')
const path = require('path')
const fs = require('fs')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
//const connectDB = require('./config/db')

//Load config

dotenv.config({ path: './config/config.env'})

const app = express()

const PORT = process.env.PORT || 3000



app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} MODE ON PORT ${PORT}`)
    )