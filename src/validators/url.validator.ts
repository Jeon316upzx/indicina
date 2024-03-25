import dotenv from "dotenv";
import { UrlSchema } from "./schema/urlSchema";
import { UrlType } from "../types";

export const validateUrl = ( originalUrl : string): boolean => {
  const { value, error } = UrlSchema.validate(originalUrl);
  if (error) throw new Error(`Validation error: ${error.message}`);
  return false;
};
