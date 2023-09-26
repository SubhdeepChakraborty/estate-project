import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoute } from "./routes/user.routes.js";
import { residencyRoute } from "./routes/res.routes.js";
dotenv.config(); //With this now its able to recognise the .env files

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const PORT = process.env.PORT || 3000;

//Routes
app.use("/api/user/", userRoute);
app.use("/api/residency/", residencyRoute);

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT} peacefully`)
);
