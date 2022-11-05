/* == External Modules == */
const express = require('express')

/* == Internal Modules == */
const routes = require('./routes');

/* == Express Instance == */
const app = express()

/* == Port == */
const PORT = process.env.PORT || 3003;

/* == DB connection == */
require('./config/db.connection');

/* == Middleware == */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* == Routes == */
app.use("/profiles" , routes.profiles)

/* == Listen == */
app.listen(PORT, () => {
  console.log('🎉🎊', 'Party on PORT', PORT, '🎉🎊',)
})