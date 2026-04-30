import express from "express";
import { router } from "./api";

const app = express();

app.use(express.json());

const port: number = +(process.env.PORT || 3000);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});

app.use("/api", router);
