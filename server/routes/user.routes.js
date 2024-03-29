import express from "express";
import {
  addFavResidency,
  bookVisit,
  cancelBookings,
  createUser,
  deleteUser,
  getAllFavResidency,
  getAllbookings,
  getSIngleUser,
  getallUsers,
  updateUser,
  getSearchedUser,
  loginLogout,
} from "../controller/useCntrl.js";

const router = express.Router();

router.post("/register", createUser);
router.get("/:id", getSIngleUser);
router.get("/", getallUsers);
router.delete("/:id", deleteUser);
router.post("/book/:id", bookVisit);
router.put("/update/:id", updateUser);
router.get("/bookings/:id", getAllbookings);
router.post("/cancel/:id", cancelBookings);
router.post("/fav/:rid", addFavResidency);
router.get("/favs/:id", getAllFavResidency);
router.get("/users/search", getSearchedUser);
router.post("/users/login&logout", loginLogout);

export { router as userRoute };
