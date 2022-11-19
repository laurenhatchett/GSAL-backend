/* == External Modules == */
const express = require('express')
const cors = require('cors')
// whitelist & corsOptions
const whitelist = ['http://localhost:3000',process.env.FRONTEND_URL]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || (!origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

require('dotenv').config()
/* == Internal Modules == */
const routes = require('./routes');

/* == Express Instance == */
const app = express()

/* == Port == */
const PORT = process.env.PORT || 3003;

/* == DB connection == */
require('./config/db.connection');

/* == Middleware == */
app.use(cors(corsOptions)) 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* == Routes == */

app.use(routes.profiles)

/* == Listen == */
app.listen(PORT, () => {
  console.log('🎉🎊', 'Party on PORT', PORT, '🎉🎊',)
})