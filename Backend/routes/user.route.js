import express from 'express'; 
import { getUsers } from '../controllers/user.controller';
import { verifytoken } from '../utils/verifyUser';
const router = express.router()
router.get("/getusers", verifytoken, getUsers)

export default router;