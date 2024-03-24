import dotenv from "dotenv";
import { envSchema } from "./schema/envSchema";
import { EnvConfig } from "../types";
dotenv.config();

const data = {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
  BASE_URL: process.env.BASE_URL,
};
const { value, error } = envSchema.validate(data);
if (error) throw new Error(`Validation error: ${error.message}`);

export const config: EnvConfig = {
  PORT: value.PORT,
  JWT_SECRET: value.JWT_SECRET,
  DATABASE_URL: value.DATABASE_URL,
  BASE_URL: value.BASE_URL,
};
