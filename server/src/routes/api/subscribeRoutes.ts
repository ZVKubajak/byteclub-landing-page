import { Router } from "express";
import { subscribe, unsubscribe } from "../../controllers/subscribeController";

const router = Router();

router.post("/", subscribe);
router.delete("/", unsubscribe);

export { router as subscribeRouter };