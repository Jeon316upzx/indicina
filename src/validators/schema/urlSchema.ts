import Joi from "joi";

export const UrlSchema = Joi.object({
  originalUrl: Joi.string().uri().required(),
});
