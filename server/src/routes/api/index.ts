import { Router } from "express";
import { subscribeRouter } from "./subscribeRoutes";

const router = Router();

router.use("/subscribe", subscribeRouter);

export default router;