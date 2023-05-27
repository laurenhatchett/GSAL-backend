import { Router } from 'express'
import * authCtrl from '../controllers/auth.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*--------- Public Routes -----------*/
router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)

/*------- Protected Routes -----------*/
router.use(decodeUserFromToken)
router.post('/change-password', checkAuth, authCtrl.changePassword)

export { router }