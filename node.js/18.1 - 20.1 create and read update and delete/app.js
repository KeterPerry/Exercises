import express from "express";
import { productRouter } from "./routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", productRouter);

export default app;
