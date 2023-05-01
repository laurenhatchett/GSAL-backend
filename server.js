
import 'dotenv.config.js'
import express from 'express'
import cors from 'cors'


import { router as profilesRouter } from './routes/profiles.js'


import './confirg/database.js'

const app = express()


/*----------------*/



require('dotenv').config()
/* == Internal Modules == */
const routes = require('./routes');





app.use(cors()) 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* == Routes == */
app.get('/', function (req, res) {
	res.send('hello');
});
app.use("/profiles",routes.profiles)

/* == Listen == */
app.listen(PORT, () => {
  console.log('🎉🎊', 'Party on PORT', PORT, '🎉🎊',)
})