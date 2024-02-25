import express from "express";
import {
  createResidency,
  deleteResidency,
  getAllresidency,
  singleResidency,
  updateResidency,
} from "../controller/resCntrl.js";

const router = express.Router();

router.post("/register", createResidency);
router.get("/", getAllresidency);
router.get("/:id", singleResidency);
router.delete("/:id", deleteResidency);

export { router as residencyRoute };
