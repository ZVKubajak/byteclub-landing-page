import { Router } from "express";
import { subscribe } from "../../controllers/subscribeController";

const router = Router();

router.post("/", subscribe);

export { router as subscribeRouter };