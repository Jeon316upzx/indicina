import Joi from "joi";

export const envSchema = Joi.object({
  DATABASE_URL: Joi.string().required(),
  PORT: Joi.number().required(),
  JWT_SECRET: Joi.string().required(),
  BASE_URL: Joi.string().required(),
  DOMAIN: Joi.string().required(),
});
