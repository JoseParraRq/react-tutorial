import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./router/user.router";
import productRoutes from "./router/product.router";
import userTypesRoutes from "./router/userType.router";
dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(productRoutes);
app.use(userTypesRoutes);

export default app;