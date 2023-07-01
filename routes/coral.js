import express from "express";

import { getUnknownCoral, getNoBleachingCoral, getLowBleachingCoral, getMediumBleachingCoral, getHighBleachingCoral } from "../controllers/coral.js";

const router = express.Router();

router.get("/getUnknown", getUnknownCoral)
router.get("/getNoBleaching", getNoBleachingCoral)
router.get("/getLowBleaching", getLowBleachingCoral)
router.get("/getMediumBleaching", getMediumBleachingCoral)
router.get("/getHighBleaching", getHighBleachingCoral)

export default router