import app from "./app";
import { createServer } from "http";
import { database } from "./configs/database.config";
import { Connection } from "mongoose";
import { config } from "./validators/env.validator";

const { PORT } = config;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log(`Database connected successfully`);
});

const server = createServer(app);

server.listen(PORT || process.env.PORT, () => {
  console.log(`Server is listening @PORT -> ${PORT}`);
});
