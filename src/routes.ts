import { Router } from "express";

import authControllers from "./controllers/authControllers";

const router = Router();


router.post('/auth',authControllers.store);

export default router;