import mongoose from "mongoose";
import { config } from "../validators/env.validator";


const { DATABASE_URL } = config;
mongoose.connect(DATABASE_URL);
export const database = mongoose.connection;

